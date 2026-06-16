import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { IRootStore } from '../stores/RootStore';
import {
  Container,
  Header,
  HeaderTitle,
  TableWrapper,
  TableContainer,
  Table,
  TableHead,
  TableHeadRow,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
  TypeBadge,
  DeleteButton,
  Pagination,
  PaginationButtons,
  PageButton,
  LoadingContainer,
} from './MeterList.styles';
import IconGVS from '../icons/icon-gvs.svg';
import IconHVS from '../icons/icon-hvs.svg';
import IconTrash from '../icons/icon-trash.svg';

interface MeterListProps {
  store: IRootStore;
}

const DeleteIcon = () => (
  <img src={IconTrash} alt="Delete" width="14" height="15" />
);


export const MeterList = observer(({ store }: MeterListProps) => {
  const { meterStore, areaStore } = store;

  useEffect(() => {
    meterStore.fetchMeters();
  }, [meterStore.offset]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const getMeterType = (types: string[]) => {
    if (types.includes('ColdWaterAreaMeter')) return 'ХВС';
    if (types.includes('HotWaterAreaMeter')) return 'ГВС';
    return types[0];
  };

  const handleDelete = (meterId: string) => {
    meterStore.deleteMeter(meterId);
  };

  const handlePrevPage = () => {
    const newOffset = Math.max(0, meterStore.offset - meterStore.limit);
    meterStore.setOffset(newOffset);
  };

  const handleNextPage = () => {
    const newOffset = meterStore.offset + meterStore.limit;
    if (newOffset < meterStore.count) {
      meterStore.setOffset(newOffset);
    }
  };

  const handlePageClick = (page: number) => {
    const newOffset = (page - 1) * meterStore.limit;
    meterStore.setOffset(newOffset);
  };

  const getPageNumbers = () => {
    const currentPage = meterStore.currentPage;
    const totalPages = meterStore.totalPages;
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          '...',
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages
        );
      }
    }

    return pages;
  };

  const loadAddressForArea = (areaId: string) => {
    if (!areaStore.getArea(areaId)) {
      areaStore.fetchAreas([areaId]);
    }
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>Список счётчиков</HeaderTitle>
      </Header>

      <TableWrapper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableHeadRow>
                <TableHeadCell>№</TableHeadCell>
                <TableHeadCell>Тип</TableHeadCell>
                <TableHeadCell>Дата установки</TableHeadCell>
                <TableHeadCell>Автоматический</TableHeadCell>
                <TableHeadCell>Значение</TableHeadCell>
                <TableHeadCell>Адрес</TableHeadCell>
                <TableHeadCell>Примечание</TableHeadCell>
                <TableHeadCell></TableHeadCell>
              </TableHeadRow>
            </TableHead>
            <TableBody>
              {meterStore.loading ? (
                <tr>
                  <td colSpan={8}>
                    <LoadingContainer>Загрузка...</LoadingContainer>
                  </td>
                </tr>
              ) : (
                meterStore.meters.map((meter, index) => {
                  loadAddressForArea(meter.area.id);

                  return (
                    <TableRow key={meter.id}>
                      <TableCell>{meterStore.offset + index + 1}</TableCell>
                      <TableCell>
                        <TypeBadge type={getMeterType(meter._type)}>
                          <img
                            src={
                              getMeterType(meter._type) === 'ХВС'
                                ? IconHVS
                                : IconGVS
                            }
                            alt={getMeterType(meter._type)}
                            width="16"
                            height="16"
                          />
                          {getMeterType(meter._type)}
                        </TypeBadge>
                      </TableCell>
                      <TableCell>
                        {formatDate(meter.installation_date)}
                      </TableCell>
                      <TableCell>
                        {meter.is_automatic === null
                          ? '-'
                          : meter.is_automatic
                            ? 'Да'
                            : 'Нет'}
                      </TableCell>
                      <TableCell>{meter.initial_values.join(', ')}</TableCell>
                      <TableCell>
                        {areaStore.getAddress(meter.area.id)}
                      </TableCell>
                      <TableCell>{meter.description}</TableCell>
                      <TableCell>
                        <DeleteButton onClick={() => handleDelete(meter.id)}>
                          <DeleteIcon />
                        </DeleteButton>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination>
          <PaginationButtons>
            <PageButton
              onClick={handlePrevPage}
              disabled={meterStore.currentPage === 1}
            >
              ←
            </PageButton>
            {getPageNumbers().map((page, index) =>
              typeof page === 'number' ? (
                <PageButton
                  key={index}
                  onClick={() => handlePageClick(page)}
                  className={
                    meterStore.currentPage === page ? 'active' : ''
                  }
                >
                  {page}
                </PageButton>
              ) : (
                <span key={index} style={{ padding: '8px' }}>
                  {page}
                </span>
              )
            )}
            <PageButton
              onClick={handleNextPage}
              disabled={meterStore.currentPage === meterStore.totalPages}
            >
              →
            </PageButton>
          </PaginationButtons>
        </Pagination>
      </TableWrapper>
    </Container>
  );
});
