import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChannel } from '../../redux/actions/channel';


function ChannelSelection() {
  const dispatch = useDispatch();
  const channel = useSelector(state => state.channel);
  
  // default state for replacment checkboxes
  const type = {
    email: false,
    push: false,
    telegram: false,
  };

  // telegram userName value
  const [telegram, setTelegram] = useState('');

  // channel state
  const [channelType, setChannelType] = useState({
    email: false,
    push: false,
    telegram: false,
  });

  // checkboxes
  const inputHandler = (e) => {
    const event = e;
    const newCheckBox = {
      ...type,
      [event.target.name]: event.target.checked,
    };
    setChannelType(newCheckBox);
    if (event.target.name === 'push') {
      pushCheckBoxHandler();
    }
  };

  // telegram input handler
  function telegramHandler(e) {
    setTelegram(e.target.value);
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

    // Send push notification
    await fetch('/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),

    });
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
        Выберете удобный для Вас способ получения уведомлений:
      </div>

      <div className="card-body">
        <div className="form-check">
          <input
            className="form-check-input"
            onChange={inputHandler}
            type="checkbox"
            name="email"
            id="email"
            checked={channelType.email}
          />
          <label className="form-check-label" htmlFor="email">
            E-mail
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            onClick={inputHandler}
            type="checkbox"
            name="push"
            id="push"
            value={telegram}
            checked={channelType.push}
          />
          <label className="form-check-label" htmlFor="push">
            Push-уведомления
          </label>
        </div>
        
        <div className="form-check">
          <input
            className="form-check-input"
            onChange={inputHandler}
            type="checkbox"
            name="telegram"
            id="telegram"
            checked={channelType.telegram}
          />
          <label className="form-check-label" htmlFor="telegram">
            Telegram бот
          </label>
          {channelType.telegram && (
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
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ChannelSelection;
