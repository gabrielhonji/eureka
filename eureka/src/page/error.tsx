import { useNavigate } from "react-router";
import Navbar from "../components/navbar";

function Error() {
  const navigate = useNavigate();
  
  return (
    <div className="content">
      <Navbar />
      <div className="flex justify-center items-center gap-32 mt-[10%]">
        <svg xmlns="http://www.w3.org/2000/svg" className="max-w-96 fill-slate-950 dark:fill-neutral-50" viewBox="0 0 447 385" fill="none">
          <path d="M152.51 383.59C146.206 385.744 139.001 381.475 136.495 374.071L97.4964 259.81L120.285 252.014L159.323 366.433C161.828 373.758 158.774 381.435 152.51 383.59Z"/>
          <path d="M149.103 385C147.262 385 145.383 384.569 143.582 383.668C139.94 381.866 137.043 378.498 135.633 374.345L96.6347 260.084C96.4781 259.653 96.7131 259.144 97.1829 258.987L119.971 251.192C120.206 251.114 120.441 251.114 120.637 251.231C120.833 251.349 120.989 251.505 121.068 251.74L160.105 366.159C162.729 373.915 159.44 382.101 152.744 384.412C151.609 384.804 150.356 385 149.103 385ZM98.5925 260.358L137.317 373.797C138.57 377.518 141.154 380.574 144.365 382.141C146.949 383.394 149.729 383.629 152.235 382.767C158.03 380.77 160.849 373.562 158.5 366.707L119.736 253.111L98.5925 260.358Z"/>
          <path d="M116.251 153.382L42.5217 205.988L13.8209 235.798L2.5442 255.736L2.50505 255.892C0.273197 259.339 1.56532 267.291 5.75493 275.399C9.86623 283.39 15.6612 288.953 19.7334 289.266L19.6159 289.344L41.2687 291.695L81.7944 285.231L167.818 254.443L274.751 272.775L275.495 272.814C248.635 267.8 212.377 231.88 186.026 181.076C159.713 130.31 151.334 80.1321 162.885 55.376H162.846L116.838 152.128L116.251 153.382Z" fill="#B9FF66"/>
          <path d="M293.267 270.603C319.694 256.873 314.584 194.629 281.852 131.577C249.121 68.5249 201.164 28.5414 174.736 42.2713C148.309 56.0013 153.419 118.245 186.15 181.297C218.881 244.349 266.839 284.333 293.267 270.603Z" fill="white"/>
          <path d="M281.643 274.185C270.132 274.185 256.271 267.761 241.353 255.266C221.031 238.266 201.101 212.06 185.243 181.428C161.241 135.05 151.335 87.4964 160.027 60.2725C162.925 51.1849 167.78 44.8392 174.397 41.4313C187.553 34.6939 206.074 40.4129 226.591 57.5698C246.913 74.57 266.843 100.775 282.701 131.407C306.742 177.785 316.648 225.339 307.917 252.563C305.019 261.651 300.164 267.996 293.547 271.404C289.983 273.284 285.99 274.185 281.643 274.185ZM186.379 40.4129C182.346 40.4129 178.587 41.2354 175.22 42.9981C168.994 46.171 164.452 52.2033 161.711 60.8601C153.136 87.6922 163.003 134.737 186.809 180.723C219.23 243.279 266.764 283.312 292.803 269.955C299.028 266.782 303.57 260.75 306.311 252.093C314.886 225.261 305.019 178.216 281.213 132.23C252.982 77.782 213.357 40.4129 186.379 40.4129Z" fill="black"/>
          <path d="M281.643 274.185C270.132 274.185 256.271 267.761 241.352 255.266C221.031 238.265 201.101 212.06 185.243 181.428C161.241 135.05 151.335 87.4964 160.027 60.2726C162.925 51.1849 167.78 44.8392 174.397 41.4313C183.207 36.8875 194.719 38.0234 207.679 44.6825C220.091 51.0674 233.521 62.3878 246.599 77.3903C246.913 77.7428 246.873 78.2912 246.521 78.6046C246.169 78.9179 245.62 78.8788 245.307 78.5262C218.76 48.0512 191.899 34.4197 175.219 42.9982C168.994 46.171 164.452 52.2033 161.711 60.8601C153.136 87.6922 163.003 134.737 186.809 180.723C215.001 235.132 254.665 272.54 281.604 272.54C285.637 272.54 289.396 271.718 292.763 269.955C298.989 266.782 303.531 260.75 306.272 252.093C314.847 225.261 304.98 178.216 281.173 132.23C274.086 118.52 266.099 105.633 257.524 93.9204C257.249 93.5287 257.328 92.9803 257.719 92.7061C258.111 92.4319 258.659 92.5103 258.933 92.902C267.586 104.692 275.574 117.658 282.74 131.446C306.742 177.786 316.648 225.339 307.916 252.563C305.019 261.651 300.164 267.996 293.546 271.404C289.983 273.284 285.989 274.185 281.643 274.185Z" fill="black"/>
          <path d="M233.304 190.339C239.426 187.158 238.248 172.751 230.674 158.159C223.099 143.567 211.995 134.316 205.873 137.497C199.751 140.678 200.928 155.085 208.503 169.677C216.078 184.269 227.181 193.519 233.304 190.339Z" fill="#B9FF66"/>
          <path d="M230.624 191.848C223.89 191.848 214.493 183.152 207.719 170.03C202.08 159.14 199.77 147.937 201.845 141.474C202.589 139.202 203.803 137.596 205.487 136.734C212.143 133.327 223.537 142.61 231.447 157.848C237.085 168.737 239.395 179.94 237.32 186.403C236.576 188.675 235.362 190.281 233.679 191.143C232.739 191.613 231.721 191.848 230.624 191.848ZM208.541 137.714C207.719 137.714 206.936 137.87 206.27 138.223C204.978 138.889 204.038 140.142 203.451 141.983C201.532 148.016 203.764 158.749 209.207 169.246C216.411 183.152 227.257 192.514 232.856 189.615C234.148 188.949 235.088 187.696 235.676 185.855C237.594 179.783 235.323 169.09 229.92 158.592C223.577 146.41 214.493 137.714 208.541 137.714Z" fill="#B9FF66"/>
          <path d="M275.692 259.574C265.59 259.574 253.452 253.934 240.374 243.005C222.597 228.12 205.134 205.166 191.273 178.373C170.247 137.792 161.594 96.153 169.19 72.2979C171.735 64.307 176.003 58.7447 181.837 55.7286C195.228 48.8736 214.923 56.7862 235.91 77.4293C236.263 77.7818 236.263 78.2911 235.91 78.6436C235.558 78.9961 235.049 78.9961 234.696 78.6436C214.257 58.5489 195.267 50.7147 182.62 57.2562C177.217 60.0374 173.262 65.2471 170.834 72.8071C163.356 96.2314 171.97 137.361 192.8 177.59C217.429 225.182 252.081 257.851 275.653 257.851C279.177 257.851 282.427 257.107 285.402 255.618C290.806 252.837 294.761 247.627 297.188 240.067C304.667 216.643 296.053 175.513 275.222 135.285C268.918 123.142 261.87 111.743 254.274 101.441C254 101.049 254.078 100.501 254.47 100.227C254.861 99.9526 255.41 100.031 255.684 100.423C263.358 110.842 270.445 122.28 276.788 134.501C297.815 175.083 306.468 216.721 298.872 240.576C296.327 248.567 292.059 254.13 286.225 257.146C283.014 258.752 279.49 259.574 275.692 259.574Z" fill="black"/>
          <path d="M41.3087 292.517C41.2695 292.517 41.2304 292.517 41.2304 292.517L19.5775 290.167C19.46 290.167 19.3426 290.128 19.2251 290.05C14.7614 289.345 9.12307 283.704 5.01177 275.791C0.626379 267.448 -0.665744 259.3 1.72273 255.462L1.76188 255.344L13.0386 235.367C13.0777 235.289 13.1169 235.249 13.1561 235.21L41.8568 205.401C41.896 205.362 41.9352 205.323 41.9743 205.284L115.508 152.794L162.024 54.9846C162.142 54.7887 162.298 54.632 162.533 54.5537C162.768 54.4753 163.003 54.4753 163.199 54.5929C163.63 54.7887 163.825 55.2979 163.63 55.7288C151.844 80.9941 161.163 131.211 186.77 180.645C212.417 230.157 248.166 266.821 275.692 271.874C276.123 271.953 276.436 272.344 276.397 272.814C276.358 273.245 275.966 273.559 275.535 273.598L274.791 273.559C274.752 273.559 274.713 273.559 274.674 273.559L167.937 255.266L82.1084 285.976C82.0693 285.976 81.991 286.015 81.9518 286.015L41.4261 292.478C41.387 292.517 41.3478 292.517 41.3087 292.517ZM20.204 288.522L41.3087 290.794L81.6386 284.331L167.623 253.581C167.78 253.542 167.898 253.503 168.054 253.542L264.141 269.994C238.181 258.595 207.836 224.947 185.322 181.468C162.964 138.301 152.979 94.4689 158.461 66.775L117.035 153.735C116.957 153.852 116.878 153.97 116.761 154.048L43.1098 206.655L14.5265 236.307L3.24978 256.284C3.24978 256.323 3.21063 256.363 3.21063 256.363C1.17455 259.535 2.54499 267.37 6.49967 275.008C10.376 282.49 15.9752 288.13 19.8124 288.404C19.9691 288.404 20.0865 288.444 20.204 288.522Z" fill="black"/>
          <path d="M116.368 153.069L162.845 55.337H162.884C151.333 80.093 159.752 130.271 186.025 181.037C212.376 231.881 248.634 267.8 275.573 272.736L274.829 272.697L168.053 254.404L165.586 253.973C153.174 251.779 136.611 235.641 124.747 212.608C112.57 188.988 110.416 165.447 115.82 154.244L116.368 153.069Z" fill="white"/>
          <path d="M275.573 273.598C275.573 273.598 275.534 273.598 275.573 273.598L274.79 273.559C274.751 273.559 274.712 273.559 274.673 273.559L167.896 255.266L165.43 254.835C152.313 252.524 135.672 235.719 123.964 213.039C110.69 187.265 110.025 164.311 115.037 153.891L115.624 152.716L162.101 55.0236C162.219 54.8278 162.375 54.6711 162.61 54.5927C162.845 54.5144 163.08 54.5144 163.276 54.6319C163.707 54.8278 163.902 55.337 163.707 55.7679C151.921 81.0332 161.24 131.25 186.847 180.684C212.494 230.196 248.243 266.86 275.769 271.913C276.2 271.992 276.513 272.383 276.474 272.853C276.356 273.245 276.004 273.598 275.573 273.598ZM158.382 66.7749L117.151 153.46L116.564 154.635C111.591 164.977 113.04 188.087 125.491 212.217C136.964 234.466 153.135 250.918 165.743 253.111L168.21 253.542L264.101 269.994C238.141 258.595 207.795 224.947 185.281 181.468C162.924 138.301 152.939 94.4688 158.382 66.7749Z" fill="black"/>
          <path d="M40.1335 292.4C40.0943 292.4 40.0551 292.4 40.0551 292.4L19.5378 290.206C19.4203 290.206 19.3029 290.167 19.1854 290.089C14.7217 289.384 9.08335 283.743 4.97205 275.83C0.625819 267.448 -0.666303 259.3 1.72217 255.462L1.76132 255.344L13.038 235.367C13.273 234.936 13.782 234.818 14.2127 235.053C14.6434 235.288 14.7609 235.798 14.5259 236.229L3.24922 256.284C3.24922 256.323 3.21006 256.362 3.21006 256.362C1.17399 259.535 2.54443 267.37 6.4991 275.008C10.3755 282.49 15.9747 288.13 19.8119 288.404C19.9294 288.404 20.086 288.444 20.1643 288.522L40.2118 290.676C40.6816 290.715 41.034 291.146 40.9557 291.616C40.9166 292.047 40.5642 292.4 40.1335 292.4Z" fill="black"/>
          <path d="M41.5036 291.538C34.8472 291.068 25.5283 281.628 18.7544 268.584C11.589 254.757 9.90532 240.459 14.2907 235.367L2.5833 255.736L2.50498 255.893C0.273136 259.34 1.56526 267.291 5.75487 275.4C9.86617 283.391 15.6611 288.953 19.7333 289.266L19.6158 289.345L41.5036 291.538Z" fill="white"/>
          <path d="M41.5039 292.4C41.4647 292.4 41.4647 292.4 41.4256 292.4C41.269 292.4 41.0732 292.361 40.9166 292.361L19.5378 290.206C19.4203 290.206 19.3029 290.167 19.1854 290.089C14.7217 289.384 9.08335 283.743 4.97205 275.83C0.625819 267.448 -0.666303 259.3 1.72217 255.462L1.76132 255.344L12.0591 237.404C12.4507 236.385 12.9597 235.484 13.5862 234.74C13.8603 234.388 14.3693 234.348 14.7217 234.583C15.0741 234.858 15.1916 235.328 14.9566 235.719L13.5079 238.187C11.1977 244.415 13.4687 256.637 19.4203 268.075C25.8809 280.57 34.6909 289.697 40.9949 290.52L41.4647 290.559C41.9346 290.598 42.287 291.029 42.2478 291.499C42.287 292.047 41.9346 292.4 41.5039 292.4ZM20.1643 288.522L35.1216 290.05C29.3658 286.367 23.0226 278.768 17.9716 268.976C13.0772 259.535 10.6496 249.743 11.0411 242.692L3.24922 256.284C3.24922 256.323 3.21006 256.363 3.21006 256.363C1.17399 259.535 2.54443 267.37 6.4991 275.008C10.3755 282.49 15.9747 288.13 19.8119 288.404C19.9294 288.404 20.086 288.444 20.1643 288.522Z" fill="black"/>
          <path d="M80.3453 285.388L82.0681 285.035C72.7492 286.994 58.0268 272.892 47.6507 252.876C37.0396 232.429 35.0427 212.021 42.5605 205.988L41.5816 206.968L14.3687 235.249C9.90501 240.263 11.5495 254.639 18.7541 268.544C25.6846 281.941 35.5125 291.499 42.2081 291.46L80.3453 285.388Z"/>
          <path d="M42.1697 292.361C35.0435 292.361 25.1372 282.764 17.9718 268.976C10.6889 254.874 8.84861 240.146 13.7039 234.701L40.4077 206.968C40.8776 206.341 41.4258 205.793 42.0131 205.323C42.3655 205.048 42.8745 205.088 43.1878 205.401C43.501 205.754 43.501 206.263 43.1878 206.576L41.6607 208.182C36.2181 215.468 38.9198 234.113 48.4346 252.485C58.6932 272.305 73.024 285.897 81.7948 284.252L81.9123 284.213C82.3821 284.135 82.8129 284.409 82.9303 284.879C83.0086 285.349 82.7345 285.78 82.2647 285.897C82.2255 285.897 82.1864 285.897 82.1472 285.937L80.5419 286.25H80.5027L42.3655 292.321C42.2872 292.321 42.2089 292.361 42.1697 292.361ZM38.1367 211.825L14.996 235.876C10.6889 240.733 12.6467 254.913 19.538 268.192C26.2727 281.197 35.7874 290.598 42.1697 290.637L75.8432 285.271C66.7592 282.059 55.5608 269.955 46.9075 253.307C38.6849 237.443 35.5133 221.304 38.1367 211.825Z" fill="black"/>
          <path d="M205.878 137.479C199.731 140.612 200.632 155.145 208.463 169.638C221.58 193.885 232.034 191.025 233.248 190.594C233.287 190.594 233.287 190.634 233.248 190.634L210.734 208.77C204.116 199.486 197.812 189.145 192.017 177.981C186.497 167.288 181.837 156.633 178.156 146.292L205.878 137.479Z" fill="black"/>
          <path d="M210.733 209.632C210.694 209.632 210.655 209.632 210.616 209.632C210.381 209.592 210.185 209.475 210.029 209.279C203.255 199.76 196.951 189.341 191.273 178.412C185.831 167.914 181.132 157.221 177.373 146.645C177.295 146.41 177.295 146.175 177.412 145.979C177.53 145.783 177.686 145.626 177.921 145.548L205.643 136.734C206.074 136.617 206.544 136.813 206.7 137.244C206.857 137.674 206.7 138.144 206.309 138.34C204.978 139.006 203.999 140.338 203.411 142.297C201.493 148.446 203.842 159.336 209.285 169.325C222.088 192.984 231.956 190.281 233.013 189.889C233.404 189.733 233.874 189.929 234.07 190.281C234.266 190.634 234.187 191.143 233.874 191.417L211.282 209.436C211.125 209.553 210.929 209.632 210.733 209.632ZM179.292 146.84C183.012 157.064 187.554 167.405 192.8 177.59C198.282 188.166 204.39 198.233 210.929 207.516L230.468 191.77C226.004 191.574 217.586 188.244 207.718 170.03C202.002 159.493 199.653 148.368 201.728 141.67C202.002 140.808 202.315 140.064 202.707 139.359L179.292 146.84Z" fill="black"/>
          <path d="M321.724 81.5974C339.624 72.1937 346.547 50.1159 337.187 32.2852C327.828 14.4546 305.729 7.62316 287.829 17.0269C269.929 26.4306 263.006 48.5084 272.365 66.339C281.725 84.1697 303.824 91.0011 321.724 81.5974Z"/>
          <path className="fill-neutral-50 dark:fill-slate-950" d="M288.105 41.2352C289.827 38.8849 292.372 37.4356 295.27 37.1223C297.463 36.8872 299.499 37.3573 301.417 38.5324C302.396 39.12 303.258 39.8642 304.08 40.7652C304.667 39.7075 305.372 38.7674 306.194 37.984C307.8 36.4172 309.718 35.5162 311.872 35.2812C314.769 34.9678 317.588 35.8296 319.781 37.749C321.935 39.6292 323.305 42.3712 323.658 45.4657C324.01 48.6385 323.148 51.6939 320.956 55.0626C318.998 58.0787 316.022 61.2124 312.577 64.8945C311.402 66.1479 310.071 67.5581 308.7 69.0466C308.348 69.4383 307.839 69.7125 307.291 69.7517C306.742 69.83 306.233 69.6733 305.764 69.36C304.08 68.1848 302.475 67.0881 301.065 66.1479C296.914 63.3276 293.312 60.899 290.728 58.3921C287.83 55.611 286.343 52.7906 285.99 49.6178C285.677 46.5233 286.421 43.5463 288.105 41.2352Z"/>
          <path d="M423.273 83.5924C436.377 70.4828 436.377 49.2279 423.272 36.1183C410.168 23.0088 388.922 23.0087 375.818 36.1183C362.713 49.2279 362.713 70.4828 375.818 83.5924C388.922 96.7019 410.168 96.7019 423.273 83.5924Z" fill="#B9FF66"/>
          <path d="M399.539 94.273C380.588 94.273 365.121 78.8397 365.121 59.8417C365.121 40.883 380.549 25.4104 399.539 25.4104C418.529 25.4104 433.956 40.8438 433.956 59.8417C433.956 78.8005 418.529 94.273 399.539 94.273ZM399.539 27.134C381.527 27.134 366.844 41.7839 366.844 59.8417C366.844 77.8604 381.488 92.5495 399.539 92.5495C417.55 92.5495 432.233 77.8996 432.233 59.8417C432.233 41.8231 417.589 27.134 399.539 27.134Z" fill="#B9FF66"/>
          <path d="M408.622 63.1713C406.743 63.1713 405.098 64.0723 404.002 65.4824L392.686 61.0561C392.686 60.8994 392.725 60.7819 392.725 60.6252C392.725 60.351 392.686 60.0768 392.647 59.8026L404.237 54.4362C405.294 55.6505 406.86 56.4339 408.622 56.4731C411.833 56.4731 414.496 53.8486 414.496 50.5974C414.496 47.3462 411.872 44.6826 408.622 44.6826C405.412 44.6826 402.749 47.3071 402.749 50.5583C402.749 50.8325 402.788 51.1067 402.827 51.3809L391.237 56.7473C390.18 55.533 388.614 54.7496 386.852 54.7104C383.641 54.7104 380.979 57.3348 380.979 60.586C380.979 63.8372 383.602 66.5009 386.852 66.5009C388.731 66.5009 390.376 65.5999 391.472 64.1898L402.788 68.6161C402.788 68.7728 402.749 68.8903 402.749 69.047C402.749 72.2982 405.372 74.9618 408.622 74.9618C411.833 74.9618 414.496 72.3373 414.496 69.0861C414.456 65.8349 411.833 63.2105 408.622 63.1713Z" fill="black"/>
          <path d="M409.067 189.993C424.433 179.322 428.294 158.282 417.69 142.999C407.086 127.715 386.032 123.975 370.666 134.645C355.299 145.315 351.438 166.355 362.043 181.639C372.647 196.923 393.7 200.663 409.067 189.993Z" fill=""/>
          <path d="M381.412 178.373L376.478 151.619C376.243 150.248 377.496 149.112 378.827 149.465L407.998 157.73C409.486 158.161 409.838 160.08 408.624 161.02L384.348 179.509C383.291 180.371 381.686 179.783 381.412 178.373Z" className="fill-neutral-50 dark:fill-slate-950" />
          <path d="M389.535 299.581C408.512 290.34 416.452 267.553 407.271 248.686C398.09 229.819 375.264 222.016 356.287 231.257C337.311 240.499 329.371 263.286 338.552 282.153C347.733 301.02 370.559 308.823 389.535 299.581Z" fill="#B9FF66"/>
          <path d="M372.718 304.347C368.646 304.347 364.495 303.72 360.462 302.349C350.595 299.059 342.607 292.165 337.987 282.842C333.367 273.558 332.662 263.021 335.99 253.15C342.882 232.821 365.043 221.735 385.443 228.512C395.31 231.802 403.298 238.696 407.918 248.019C412.539 257.302 413.244 267.839 409.915 277.711C404.355 294.006 389.046 304.347 372.718 304.347ZM373.109 228.277C357.486 228.277 342.842 238.148 337.556 253.738C334.385 263.178 335.051 273.245 339.475 282.098C343.9 290.989 351.535 297.609 360.971 300.743C380.471 307.206 401.654 296.63 408.232 277.201C411.403 267.761 410.738 257.694 406.313 248.841C401.889 239.95 394.253 233.33 384.817 230.196C380.94 228.864 376.986 228.277 373.109 228.277Z" fill="black"/>
          <path d="M392.375 259.261C391.984 268.78 375.891 291.029 372.054 296.238C371.662 296.787 370.84 296.748 370.487 296.16C368.06 292.243 360.033 279.082 355.843 268.427C354.16 264.197 353.102 260.358 353.22 257.655C353.651 246.844 362.774 238.422 373.581 238.853C384.388 239.362 392.806 248.45 392.375 259.261Z" fill="black"/>
          <path d="M379.13 264.826C382.632 261.323 382.632 255.644 379.13 252.141C375.629 248.638 369.951 248.638 366.45 252.141C362.948 255.644 362.948 261.323 366.45 264.826C369.951 268.33 375.629 268.329 379.13 264.826Z" fill="#B9FF66"/>
        </svg>
        <div className="max-w-96">
          <h1>Opss!</h1>
          <h3 className="text-slate-600 dark:text-neutral-400 mb-8">Parece que a pagina que você buscou não existe</h3>
          <button onClick={() => navigate(-1)} className="button-component tertiary-color w-3/5" type="button">Voltar</button>
        </div>
      </div>
    </div>
  )
}

export default Error;
