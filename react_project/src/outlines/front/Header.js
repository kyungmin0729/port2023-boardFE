import styled from 'styled-components';
import { VscGithubInverted } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import colorNames from '../../styles/colors';
const { info } = colorNames;

const OuterBox = styled.header`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

    .left {
      border: 1px solid #d5d5d5;
      border-left: 0;
      border-right: 0;
      padding: 10px 0;
      margin-top: 10px;
      display: flex;
  
      a {
        flex-glow: 1;
        width: 0;
        font-size: 26px;
        text-align: center;
  
        svg {
          vertical-align: center;
        }
      }
    }
    
    .right {
        a {
          display: inline-block;
          border: 1px solid ${info};
          height: 28px;
          border-radius: 3px;
          line-height: 26px;
          color: ${info};
          font-weight: 700;
          width: 90px;
          text-align: center;
          margin-left: 5px;
    
          &.on {
            background: ${info};
            color: #fff;
          }
        }
      }
    `;
    
    const Header = () => {
      const { t } = useTranslation();

    return (
        <div>
            <OuterBox>
                <div className="left">
                   <a href="https://github.com/kyungmin0729">
                      <VscGithubInverted />
                      </a>
                </div>
                <div className='right'>
                    <NavLink to="/" className={({isActive}) => classNames({ on: isActive })} >
                        {t('메인')}
                    </NavLink>
                    <NavLink to="/login" className={({isActive}) => classNames({ on: isActive })} >
                        {t('로그인')}
                    </NavLink>
                    <NavLink to="/join" className={({isActive}) => classNames({ on: isActive })} >
                        {t('회원가입')}
                    </NavLink>
                </div>
            </OuterBox>
        </div>
    )
};

export default Header;