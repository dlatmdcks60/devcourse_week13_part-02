import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title 컴포넌트 테스트', () => {
    it('렌더를 확인', () => {
        render(<Title size="large">제목</Title>);

        expect(screen.getByText('제목')).toBeInTheDocument();
    });
});
