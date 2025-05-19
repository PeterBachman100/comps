import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';


function ButtonPage() {
    const handleClick = () => {
        
    };

    return (
        <div>
            <div>
                <Button primary rounded onClick={handleClick}><GoDatabase />Primary</Button>
            </div>
            <div>
                <Button secondary rounded outline><GoCloudDownload />Secondary</Button>
            </div>
            <div>
                <Button success rounded outline><GoBell />Success</Button>
            </div>
            <div>
                <Button warning rounded outline>Warning</Button>
            </div>
            <div>
                <Button danger rounded>Danger</Button>
            </div>
        </div>
    );
}

export default ButtonPage;