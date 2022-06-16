import { Visibility } from '@mui/icons-material';
import './widgetSm.css';

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img
            src='https://res.cloudinary.com/dhklu5lqa/image/upload/v1655220670/admin/user_1.jpg'
            alt=''
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://res.cloudinary.com/dhklu5lqa/image/upload/v1655220670/admin/user_1.jpg'
            alt=''
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://res.cloudinary.com/dhklu5lqa/image/upload/v1655220670/admin/user_1.jpg'
            alt=''
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://res.cloudinary.com/dhklu5lqa/image/upload/v1655220670/admin/user_1.jpg'
            alt=''
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://res.cloudinary.com/dhklu5lqa/image/upload/v1655220670/admin/user_1.jpg'
            alt=''
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
