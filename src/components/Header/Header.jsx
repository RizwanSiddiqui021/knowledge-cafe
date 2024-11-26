import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <header className="flex items-center justify-between py-4 border-b-2">
            <h1 className='text-6xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;