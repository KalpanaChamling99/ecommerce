import TopBar from './Topbar';
import FooterWidget from './FooterWidget';
import CopyRight from './Copyright';
const Footer = () => {
    return(
        <footer className="footer-2 footer-wrap">
            <TopBar />
            <FooterWidget />
            <CopyRight />
        </footer>
    );
};
export default Footer;