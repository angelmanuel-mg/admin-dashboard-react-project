import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import './topbar.css';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>AngelAdmin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconsContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconsContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconsContainer'>
            <Settings />
          </div>
          <img
            src='https://res.cloudinary.com/dhklu5lqa/image/upload/v1655067826/admin/admin_avatar.png'
            alt=''
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  );
}
