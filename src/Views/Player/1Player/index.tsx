const Player1 = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
        {/* <!-- Background --> */}
        <rect width="80" height="80" fill="#a2d2ff" />

        {/* <!-- Hair --> */}
        <rect x="24" y="12" width="32" height="12" fill="#3a86ff" />
        <rect x="20" y="24" width="4" height="12" fill="#3a86ff" />
        <rect x="56" y="24" width="4" height="12" fill="#3a86ff" />
        <rect x="16" y="16" width="8" height="8" fill="#3a86ff" />
        <rect x="56" y="16" width="8" height="8" fill="#3a86ff" />

        {/* <!-- Face --> */}
        <rect x="24" y="24" width="32" height="24" fill="#ffafcc" />

        {/* <!-- Eyes --> */}
        <rect x="28" y="32" width="8" height="8" fill="#ffffff" />
        <rect x="30" y="34" width="4" height="4" fill="#000000" />
        <rect x="44" y="32" width="8" height="8" fill="#ffffff" />
        <rect x="46" y="34" width="4" height="4" fill="#000000" />

        {/* <!-- Mouth --> */}
        <rect x="36" y="44" width="8" height="2" fill="#ff0a54" />

        {/* <!-- Headphones --> */}
        <rect x="12" y="16" width="4" height="12" fill="#333333" />
        <rect x="64" y="16" width="4" height="12" fill="#333333" />
        <rect x="16" y="12" width="8" height="4" fill="#333333" />
        <rect x="56" y="12" width="8" height="4" fill="#333333" />
        <rect x="16" y="28" width="4" height="4" fill="#ff006e" />
        <rect x="60" y="28" width="4" height="4" fill="#ff006e" />

        {/* <!-- Algorithm symbols --> */}
        <rect x="30" y="56" width="4" height="4" fill="#ff9500" />
        <rect x="34" y="52" width="4" height="4" fill="#ff9500" />
        <rect x="38" y="56" width="4" height="4" fill="#ff9500" />
        <rect x="42" y="52" width="4" height="4" fill="#ff9500" />
        <rect x="46" y="56" width="4" height="4" fill="#ff9500" />
      </svg>
    </>
  );
};

export default Player1;
