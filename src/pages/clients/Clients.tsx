import { BsPersonCircle } from 'react-icons/bs';
import Card from '../../components/card/Card';
import { useEffect, useState } from 'react';
import { initialState } from '../../utils/data';
import './clients.scss';

const Clients: React.FC = () => {
    const [userData, setUserData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((user) => {
                setUserData(user);
                setIsLoading(false);
            });
    }, []);

    return (
        <main className='client_container'>
            <section className='client_title'>
                <label className='font_clients'>CLIENTS</label>
            </section>
            <section>
                {isLoading ?
                    <label className='font_loading'>Loading...</label>
                    :
                    <div className='client_cards'>
                        {userData?.map((user) => (
                            <Card key={user.id} text={user.username} icon={<BsPersonCircle className='card_icon' />} email={user.email} city={user.address.city} />
                        ))}
                    </div>
                }
            </section>
        </main>
    )
}

export default Clients
