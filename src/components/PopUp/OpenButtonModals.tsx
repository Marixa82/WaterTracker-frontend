import Icon from "../Icon";

interface OpenSettingButtonProps {
    onClick: () => void;
  }
  
  export const OpenSettingButton: React.FC<OpenSettingButtonProps> = ({ onClick }) => {
    return (
      <button className="menu-item" onClick={onClick}>
        <Icon iconId="icon-cog-6-tooth" />
        <span>Settings</span>
      </button>
    );
  };
 
interface LogoutButtonProps {
    onClick: () => void;
}
export const LogoutButton: React.FC<LogoutButtonProps> = ({onClick}) => {
    return (
        <button className="menu-item" onClick={onClick}>
                  <Icon iconId="icon-arrow-right-on-rectangle" />
                  <span>Log out</span>
                </button>
    )
}