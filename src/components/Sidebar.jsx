import { Icon } from './Icon';
import { NAV_ITEMS, PROFILE } from '../data/content';
import { useRef, useState } from 'react';
import logo from '../assets/mmlogo1.png';

export default function Sidebar({ activePage, onNavigate, onClose }) {
  const audioRef          = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted,   setMuted]   = useState(false);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    playing ? a.pause() : a.play();
    setPlaying(!playing);
  };

  const toggleMute = () => {
    const a = audioRef.current;
    if (!a) return;
    a.muted = !muted;
    setMuted(!muted);
  };
  return (
    <nav className="notebook-sidebar" aria-label="Primary">
      <div className="notebook-sidebar-head">
        <div className="notebook-logo">
          <img src={logo} alt="mmlogo" className="mmlogo" width="70px" height="63px"/>
        </div>
        {onClose && (
          <button
            type="button"
            className="notebook-sidebar-close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <Icon name="close" />
          </button>
        )}
      </div>

      <ul className="notebook-navlist">
        {NAV_ITEMS.map((item) => {
          const active = item.id === activePage;
          return (
            <li key={item.id}>
              <button
                type="button"
                className={`notebook-navlink${active ? ' is-active' : ''}`}
                onClick={() => {
                  onNavigate(item.id);
                  onClose?.();
                }}
                aria-current={active ? 'page' : undefined}
              >
                <Icon name={item.icon} className="notebook-navicon" />
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <audio ref={audioRef} src="/music/lofi.mp3" loop onEnded={() => setPlaying(false)} />
      <div className="notebook-audio" role="group" aria-label="Lo-fi player">
        <div className={`notebook-audio-wave ${playing ? 'is-playing' : ''}`} aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} style={{ '--h': `${20 + ((i * 37) % 60)}%` }} />
          ))}
        </div>
        <div className="notebook-audio-row">
          <span className="notebook-audio-title">Lo-fi Dreams</span>
        </div>
        <div className="notebook-audio-row">
          <button type="button" className="notebook-audio-btn" aria-label={playing ? 'Pause' : 'Play'} onClick={togglePlay} >
            {playing ? '⏸' : '▶'}
          </button>

          <button type="button" className="notebook-audio-btn" aria-label={muted ? 'Unmute' : 'Mute'} onClick={toggleMute}>
            {muted ? '🔇' : '🔊'}
          </button>
        </div>
      </div>

      <div className="notebook-social">
        <a href={PROFILE.social.github} aria-label="GitHub"><Icon name="github" /></a>
        <a href={PROFILE.social.linkedin} aria-label="LinkedIn"><Icon name="linkedin" /></a>
        <a href={PROFILE.social.instagram} aria-label="Instagram"><Icon name="instagram" /></a>
        <a href={PROFILE.social.email} aria-label="Email"><Icon name="mail" /></a>
      </div>
    </nav>
  );
}
