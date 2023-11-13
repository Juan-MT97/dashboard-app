import { ReactNode } from 'react';
import './card.scss';

interface CardProps {
    text: string;
    icon: ReactNode;
    email: string;
    city: string;
}

const Card: React.FC<CardProps> = ({ text, icon, email, city }) => {
    return (
        <div className='card'>
            <div className='card_title'>
                <label className='font_text'>{text}</label>
                {icon}
            </div>
            <label className='font_email'>{email}</label>
            <label className='font_city'>{city}</label>
        </div>
    )
}

export default Card
