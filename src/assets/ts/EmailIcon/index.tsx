export default function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      width="1.5em"
      height="1.5em"
    >
      <path
        fill="#CCC"
        d="M16-.005c-8.837 0-16 7.163-16 16 0 8.836 7.163 16 16 16s16-7.164 16-16c0-8.837-7.163-16-16-16z"
      />
      <path
        fill="#1A1718"
        d="M16 1.353c-8.086 0-14.641 6.555-14.641 14.641S7.914 30.635 16 30.635s14.641-6.555 14.641-14.641c0-8.085-6.555-14.641-14.641-14.641z"
      />
      <defs>
        <path
          id="a"
          d="M16 0C7.163 0 0 7.163 0 16c0 8.836 7.163 16 16 16s16-7.164 16-16c0-8.837-7.163-16-16-16z"
        />
      </defs>
      <clipPath id="b">
        <use xlinkHref="#a" overflow="visible" />
      </clipPath>
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M0 32V0h32"
        clipPath="url(#b)"
        clipRule="evenodd"
        opacity={0.2}
      />
      <g fill="#FFF">
        <path d="m16 15.586 9.195-4.846c-.126-.502-.561-.885-1.101-.885H7.906c-.54 0-.976.383-1.101.885L16 15.586z" />
        <path d="m15.936 16.513-2.303-1.214-4.874 6.846h14.468l-4.873-6.839L16 16.547zm3.177-1.606 5.134 7.207a1.145 1.145 0 0 0 1.003-1.125v-9.317l-6.137 3.235zM7.74 22.111l5.135-7.211-6.125-3.228v9.316c0 .578.435 1.039.99 1.123z" />
      </g>
    </svg>
  );
}
