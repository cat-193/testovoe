import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 40px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;


export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 500;
  color: #272727;
  line-height: 1.2;
`;

export const TableWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #fafafa;
  border-bottom: 1px solid #e8e8e8;
`;

export const TableHeadRow = styled.tr``;

export const TableHeadCell = styled.th`
  padding: 16px 20px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #8a8a8a;
  white-space: nowrap;

  &:first-child {
    width: 80px;
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
    background-color: #fafafa;

    button {
      opacity: 1;
    }
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  padding: 20px;
  font-size: 14px;
  color: #272727;
  vertical-align: middle;
`;

export const TypeBadge = styled.span<{ type: string }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
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
  justify-content: center;
  align-items: center;
  padding: 20px 24px;
  border-top: 1px solid #f0f0f0;
`;

export const PaginationButtons = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const PageButton = styled.button`
  min-width: 36px;
  height: 36px;
  padding: 0 8px;
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
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
    background-color: #1d6bf3;
    color: white;
    border-color: #1d6bf3;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const LoadingContainer = styled.div`
  padding: 60px 20px;
  text-align: center;
  color: #8a8a8a;
  font-size: 14px;
`;
