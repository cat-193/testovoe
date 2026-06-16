import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #f5f5f5;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 24px;
  line-height: 133%;
  color: #1f2939;
`;

export const TableWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e0e5eb;
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex: 1;
`;

export const TableContainer = styled.div`
  flex: 1 1 0;
  min-height: 0;
  overflow: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background: #f0f3f7;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const TableHeadRow = styled.tr``;

export const TableHeadCell = styled.th`
  padding: 8px 12px;
  text-align: left;
  font-weight: 500;
  font-size: 13px;
  line-height: 123%;
  color: #697180;
  white-space: nowrap;

  &:first-child {
    width: 48px;
  }

  &:last-child {
    width: 60px;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s;

  &:hover {
    background: #f7f8f9;

    button {
      opacity: 1;
    }
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  padding: 8px 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #1f2939;
  vertical-align: middle;

  &:nth-last-child(2) {
    color: #5e6674;
  }
`;

export const TypeBadge = styled.span<{ type: string }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
`;

export const DeleteButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #fee3e3;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover {
    background-color: #fdd;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: #d32f2f;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 16px;
  border-top: 1px solid #f0f0f0;
  flex-shrink: 0;
`;

export const PaginationButtons = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const PageButton = styled.button`
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  background-color: #ffffff;
  border: 1px solid #ced5de;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: #272727;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled):not(.active) {
    background-color: #f5f5f5;
    border-color: #d0d0d0;
  }

  &.active {
    background: #f2f5f8;
  }
`;

export const LoadingContainer = styled.div`
  padding: 60px 20px;
  text-align: center;
  color: #8a8a8a;
  font-size: 14px;
`;
