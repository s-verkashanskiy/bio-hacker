import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChannel, setTelegramName, setPushInfo } from '../../redux/actions/channel';


function ChannelSelection() {
  const dispatch = useDispatch();
  const channelType = useSelector(state => state.channel.channelType);
  const telegramUserName = useSelector(state => state.channel.telegramUserName);
  // const userId = useSelector(state => state.auth.id);
  // const subscription = useSelector(state => state.channel.pushSubscription);

  // checkboxes
  const inputHandler = (event) => {
    const newChannel = event.target.id;
    if (event.target.id === 'push') {
      pushCheckBoxHandler();
    }
    dispatch(setChannel(newChannel));
  };

  // telegram input handler
  function telegramHandler(event) {
    const telegramUserName = event.target.value;
    dispatch(setTelegramName(telegramUserName));
  }

  function isChannel(channel) {
    return (channel === channelType);
  }


  // push subscription logic
  function pushCheckBoxHandler() {
    // Check for service worker
    if ('serviceWorker' in navigator) {
      setServiceWorker().catch((err) => console.error(err));
    }
  }

  // register SW, register Push, send notification to server
  async function setServiceWorker() {
    
    const PUBLIC_VAPID_KEY = process.env.REACT_APP_PUBLIC_VAPID_KEY;
    const register = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
    });

    // register push
    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY),
    });
    dispatch(setPushInfo(subscription.toJSON()));

    // Send push notification
    // await fetch('/subscribe', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(subscription),

    // });
  }

  // какая то функция которая конвертирует ключ
  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  return (
    <>
      <div className="card-header">
        Выберите удобный для Вас способ получения уведомлений:
      </div>

      <div className="card-body">
        <div className="form-check">
          <input
            className="form-check-input"
            onClick={inputHandler}
            type="radio"
            name="channel"
            id="email"
            checked = {isChannel('email')}
          />
          <label className="form-check-label" htmlFor="email">
            E-mail
          </label>
          { isChannel('email') &&
            <p className="card-text"><small className="text-muted">Мы отправим вам email, пожалуйста, подтвердите подписку</small></p>
            }
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            onClick={inputHandler}
            type="radio"
            name="channel"
            id="push"
            checked = {isChannel('push')}
          />
          <label className="form-check-label" htmlFor="push">
            Push-уведомления
          </label>
          { isChannel('push') &&
            <p className="card-text">
              <small className="text-muted">
              Разрешите, пожалуйста, браузеру отправлять вам уведомления
              </small>
            </p>
            }
        </div>
        
        <div className="form-check">
          <input
            className="form-check-input"
            onClick={inputHandler}
            type="radio"
            name="channel"
            id="telegram"
            checked = {isChannel('telegram')}
          />
          <label className="form-check-label" htmlFor="telegram">
            Telegram бот
          </label>
          

          { isChannel('telegram') && (


            <div className="mt-2 row w-50">
              <div className="input-group flex-nowrap col-auto">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="addon-wrapping">
                    @
                  </span>
                </div>
                <input
                  onChange={telegramHandler}
                  type="text"
                  name="telegramuser"
                  className="form-control"
                  placeholder="Имя пользователя в Telegram"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  defaultValue = {telegramUserName}
                  value = {telegramUserName}

                />
              </div>
              <p className="card-text">
                <small className="text-muted">
                Подпишитесь, пожалуйста, на нашего бота --> <a href="http://t.me">t.me</a>
                </small>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ChannelSelection;
