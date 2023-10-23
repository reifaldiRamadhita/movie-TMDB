function Footer() {
  return (
    <div className="w-full border-t-2 border-gray-500 py-12 md:py-16">
      {/* social media */}
      <div className="mb-10 px-5 md:px-10 lg:px-20">
        <h5 className="mb-2 text-gray-400 md:text-lg lg:mb-3 lg:text-xl">
          Social
        </h5>
        <div className="flex gap-x-4">
          {/* facebook */}
          <svg
            role="img"
            viewBox="0 0 24 24"
            width="25"
            fill="#f3f4f6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Facebook</title>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>

          {/* instagram */}
          <svg
            role="img"
            viewBox="0 0 24 24"
            width="25"
            fill="#f3f4f6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Instagram</title>
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
          </svg>

          {/* youtube */}
          <svg
            role="img"
            viewBox="0 0 24 24"
            width="25"
            fill="#f3f4f6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>YouTube</title>
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </div>
      </div>

      {/* link web */}
      <div className="mb-20 flex flex-wrap gap-7 px-5 md:gap-x-8 md:px-10 lg:gap-x-16 lg:px-20">
        {/* about */}
        <ul>
          <li>
            <h5 className="mb-2 text-gray-400 md:text-lg lg:mb-3 lg:text-xl">
              Social
            </h5>
          </li>
          <li>
            <a href="" className="text-xs text-gray-100 lg:text-sm">
              Movie Information
            </a>
          </li>
          <li>
            <a href="" className="text-xs text-gray-100 lg:text-sm">
              History
            </a>
          </li>
        </ul>

        {/* hot type */}
        <ul>
          <li>
            <h5 className="mb-2 text-gray-400 md:text-lg lg:mb-3 lg:text-xl">
              Hot Type
            </h5>
          </li>
          <li>
            <a href="" className="text-xs text-gray-100 lg:text-sm">
              Action
            </a>
          </li>
          <li>
            <a href="" className="text-xs text-gray-100 lg:text-sm">
              Sci-fi
            </a>
          </li>
          <li>
            <a href="" className="text-xs text-gray-100 lg:text-sm">
              Adventure
            </a>
          </li>
          <li>
            <a href="" className="text-xs text-gray-100 lg:text-sm">
              Superheros
            </a>
          </li>
          <li>
            <a href="" className="text-xs text-gray-100 lg:text-sm">
              Horror
            </a>
          </li>
        </ul>

        {/* policy */}
        <ul>
          <li>
            <h5 className="mb-2 text-gray-400 md:text-lg lg:mb-3 lg:text-xl">
              Policy
            </h5>
          </li>
          <li>
            <a href="" className="text-xs text-gray-100 lg:text-sm">
              Term Of Service
            </a>
          </li>
          <li>
            <a href="" className="text-xs text-gray-100 lg:text-sm">
              Privacy
            </a>
          </li>
        </ul>

        {/* customer suport */}
        <ul>
          <li>
            <h5 className="mb-2 text-gray-400 md:text-lg lg:mb-3 lg:text-xl">
              Customer Suport
            </h5>
          </li>
          <li>
            <a href="" className="text-xs text-gray-100 lg:text-sm">
              Online Suport
            </a>
          </li>
          <li>
            <a href="" className="text-xs text-gray-100 lg:text-sm">
              Cummon Question
            </a>
          </li>
        </ul>

        {/* contact */}
        <ul>
          <li>
            <h5 className="mb-2 text-gray-400 md:text-lg lg:mb-3 lg:text-xl">
              Contact
            </h5>
          </li>
          <li>
            <p className="text-xs text-gray-100 lg:text-sm">
              Hotline : 0821 3456 7890
            </p>
          </li>
          <li>
            <p className="text-xs text-gray-100 lg:text-sm">
              Email : contact@movie.com
            </p>
          </li>
        </ul>
      </div>

      <p className="ps-0 text-center text-sm text-gray-600 md:ps-20 md:text-start">
        © 2023, Movie. All right reserved.
      </p>
    </div>
  );
}

export default Footer;
