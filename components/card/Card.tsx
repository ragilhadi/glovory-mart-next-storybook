import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    padding: 16px;
    background-color: white;
    color: black;
    min-height: 320px;
    width: 20%;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: translate(0px, -5px);
        box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.2);
    }
`

export interface CardProps {

}

const Card: React.FC<CardProps> = ({
    children
}) => {
    return (
        <CardContainer>{children}</CardContainer>
    )
}

export default Card;