import { styled } from 'styled-components';
import { ButtonScheme, ButtonSize } from '../../style/theme';

interface Props {
    children: React.ReactNode;
    size: ButtonSize;
    scheme: ButtonScheme;
    disabled?: boolean;
    isLoading?: boolean;
}

function Button({ children, size, scheme, disabled, isLoading }: Props) {
    return (
        <ButtonStyle size={size} scheme={scheme} disabled={disabled} isLoading={isLoading}>
            {children}
        </ButtonStyle>
    )
}

const ButtonStyle = styled.button<Omit<Props, "children">>`
    font-size: ${({theme, size}) => theme.button[size]}
`
export default Button;
