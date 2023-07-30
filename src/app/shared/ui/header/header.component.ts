import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `<!--Nav-->
    <div class="w-full container mx-auto pt-10 pb-10 top-0">
      <div class="w-full flex lg:items-center lg:justify-between place-content-center">
        <a
          class="flex items-center text-white no-underline hover:no-underline font-semibold text-2xl lg:text-4xl"
          href="#"
        >
          <svg
            width="220"
            height="46"
            viewBox="0 0 387 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.9194 0.203512L37.506 0L38.0806 0.203512L73.7191 12.8931L75 13.348L74.8444 14.7127L69.4094 61.7598L69.3136 62.6337L68.5355 63.0647L38.332 79.7646L37.506 80.2195L36.668 79.7646L6.46449 63.0647L5.69832 62.6337L5.59058 61.7598L0.155626 14.7127L0 13.348L1.28093 12.8931L36.9194 0.203512ZM44.229 43.83C44.0734 43.6744 43.8698 43.5906 43.6544 43.5906C43.2114 43.5906 42.8403 43.9498 42.8403 44.4047V46.0567H50.8729L48.5983 42.1062H50.5377L52.8122 46.0567H59.6358V42.0104H61.3118V46.0447H67.7643L67.5728 47.7207H7.42913L7.23759 46.0447H14.2288V42.0942H15.9048V46.0447H18.1793V44.4047C18.1793 43.028 19.2927 41.9146 20.6694 41.9146C21.3278 41.9146 21.9623 42.178 22.4291 42.6449C22.896 43.1118 23.1594 43.7343 23.1594 44.4047H21.4834C21.4834 44.1892 21.3996 43.9857 21.244 43.83C21.0884 43.6744 20.8968 43.5906 20.6694 43.5906C20.2264 43.5906 19.8553 43.9498 19.8553 44.4047V46.0447H25.8409V44.4047C25.8409 43.7462 26.1043 43.1118 26.5712 42.6449C27.0381 42.178 27.6606 41.9146 28.331 41.9146C29.7077 41.9146 30.821 43.028 30.821 44.4047H29.145C29.145 43.9498 28.7859 43.5906 28.331 43.5906C28.1155 43.5906 27.912 43.6744 27.7563 43.83C27.6007 43.9857 27.5169 44.1892 27.5169 44.4047V46.0567H33.5026V44.4047C33.5026 43.7462 33.7659 43.1118 34.2328 42.6449C34.6997 42.178 35.3222 41.9146 35.9926 41.9146C36.651 41.9146 37.2855 42.178 37.7524 42.6449C38.2192 43.1118 38.4826 43.7343 38.4826 44.4047H36.8066C36.8066 44.1892 36.7228 43.9857 36.5672 43.83C36.4116 43.6744 36.2081 43.5906 35.9926 43.5906C35.7771 43.5906 35.5736 43.6744 35.418 43.83C35.2623 43.9857 35.1785 44.1892 35.1785 44.4047V46.0567H41.1643V44.4047C41.1643 43.028 42.2777 41.9146 43.6544 41.9146C44.3128 41.9146 44.9473 42.178 45.4141 42.6449C45.881 43.1118 46.1444 43.7343 46.1444 44.4047H44.4684C44.4684 44.1892 44.3846 43.9857 44.229 43.83ZM24.8593 16.2965H12.6965V17.9725H25.8289L24.8593 16.2965ZM36.8664 31.1766H41.3557L42.3373 32.8526H12.6965V31.1766H14.2647V27.0345H15.9407V31.1886H18.1793V29.6443C18.1793 28.2676 19.2926 27.1543 20.6693 27.1543C22.046 27.1543 23.1593 28.2676 23.1593 29.6443H21.4834C21.4834 29.2013 21.1242 28.8302 20.6693 28.8302C20.2264 28.8302 19.8553 29.1894 19.8553 29.6443V31.1886H25.8409V29.6323C25.8409 28.9739 26.1043 28.3394 26.5712 27.8725C27.038 27.4057 27.6605 27.1423 28.3309 27.1423C28.9893 27.1423 29.6238 27.4057 30.0907 27.8725C30.5576 28.3394 30.821 28.9619 30.821 29.6323H29.145C29.145 29.4168 29.0612 29.2133 28.9056 29.0577C28.7499 28.9021 28.5464 28.8183 28.3309 28.8183C28.1154 28.8183 27.9119 28.9021 27.7563 29.0577C27.6007 29.2133 27.5169 29.4168 27.5169 29.6323V31.1886H35.0588L32.6645 27.0465H34.6039L36.9622 31.1287L36.8664 31.1766ZM33.1434 23.7307H28.7739L26.4395 19.6844H24.5001L26.8465 23.7307H15.9407V19.6844H14.2647V23.7307H12.6965V25.4067H34.1011L33.1434 23.7307ZM45.0787 38.6113H48.8617L49.8313 40.2873H12.6965V38.6113H14.2647V34.565H15.9407V38.6113H18.1793V36.9712C18.1793 35.5945 19.2926 34.4812 20.6693 34.4812C22.046 34.4812 23.1593 35.5945 23.1593 36.9712H21.4834C21.4834 36.5163 21.1242 36.1572 20.6693 36.1572C20.2264 36.1572 19.8553 36.5163 19.8553 36.9712V38.6113H25.8409V36.9712C25.8409 36.3128 26.1043 35.6783 26.5712 35.2114C27.038 34.7446 27.6605 34.4812 28.3309 34.4812C29.7076 34.4812 30.821 35.5945 30.821 36.9712H29.145C29.145 36.5163 28.7858 36.1572 28.3309 36.1572C28.1154 36.1572 27.9119 36.241 27.7563 36.3966C27.6007 36.5522 27.5169 36.7557 27.5169 36.9712V38.6233H33.5025V36.9712C33.5025 36.3128 33.7659 35.6783 34.2328 35.2114C34.6996 34.7446 35.3222 34.4812 35.9925 34.4812C36.651 34.4812 37.2854 34.7446 37.7523 35.2114C38.2192 35.6783 38.4826 36.3008 38.4826 36.9712H36.8066C36.8066 36.7557 36.7228 36.5522 36.5672 36.3966C36.4115 36.241 36.208 36.1572 35.9925 36.1572C35.7771 36.1572 35.5735 36.241 35.4179 36.3966C35.2623 36.5522 35.1785 36.7557 35.1785 36.9712V38.6233H43.1992L40.8289 34.5051H42.7683L45.1266 38.5873L45.0787 38.6113ZM62.8797 32.8533V31.1773H43.3426L44.3122 32.8533H62.8797ZM59.6353 38.6105V34.5642H61.3113V38.6105H62.8796V40.2865H51.7822L50.8245 38.6105H59.6353ZM24.2128 68.9581V50.247H25.8888V69.8799L24.2128 68.9581ZM28.3668 50.247V71.2446L30.0428 72.1784V50.247H28.3668ZM20.0708 66.6596V50.247H21.7468V67.5934L20.0708 66.6596ZM15.9287 50.247V64.3731L17.6047 65.2949V50.247H15.9287ZM8.90182 60.4825L7.71667 50.247H9.30885V60.7099L8.90182 60.4825ZM36.6627 50.247V75.8296L37.5007 76.2965L38.3387 75.8416V50.247H36.6627ZM11.7749 62.0746V50.247H13.4509V62.9964L11.7749 62.0746ZM32.5089 50.247V73.5431L34.1849 74.4649V50.247H32.5089ZM61.5398 63.0084V50.247H63.2158V62.0746L61.5398 63.0084ZM40.8048 50.247V74.4769L42.4808 73.5431V50.247H40.8048ZM57.3968 65.2949V50.247H59.0728V64.3731L57.3968 65.2949ZM65.6818 50.247V60.7099L66.1008 60.4825L67.274 50.247H65.6818ZM53.2439 67.5934V50.247H54.9199V66.6596L53.2439 67.5934ZM44.9469 50.247V72.1784L46.6229 71.2566V50.247H44.9469ZM49.1007 69.8799V50.247H50.7767V68.9581L49.1007 69.8799Z"
              fill="white"
            />
            <g clip-path="url(#clip0_2619_2)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M97 16L128.392 44.997V18.2107H137.179V64.7458L105.843 35.7489V62.5352H97V16ZM168.424 46.0655V38.8623H190.347C190.476 42.2336 190.07 45.4207 189.149 48.4051C188.228 51.408 186.81 54.0424 184.912 56.3084C183.014 58.5927 180.638 60.3797 177.819 61.6877C174.982 62.9957 171.74 63.6405 168.055 63.6405C163.45 63.6405 159.36 62.6641 155.786 60.6929C152.212 58.7401 149.412 55.9952 147.385 52.4949C145.359 48.9946 144.346 44.9417 144.346 40.3545C144.346 35.7489 145.377 31.7328 147.459 28.2694C149.522 24.8059 152.378 22.1163 155.989 20.2003C159.6 18.2844 163.708 17.3264 168.313 17.3264C172.827 17.3264 176.714 18.2475 179.975 20.0714C183.236 21.9136 185.87 24.3638 187.896 27.4404L180.085 32.0275C178.943 30.13 177.414 28.5641 175.498 27.3482C173.582 26.1324 171.187 25.506 168.313 25.506C165.661 25.506 163.229 26.1139 161.018 27.3114C158.826 28.5089 157.076 30.2221 155.786 32.4328C154.497 34.6435 153.852 37.2964 153.852 40.3729C153.852 43.4495 154.478 46.1207 155.749 48.4051C157.02 50.6895 158.734 52.4396 160.908 53.6924C163.081 54.9451 165.55 55.553 168.295 55.553C171.924 55.553 174.761 54.6503 176.788 52.8265C178.814 51.0211 180.233 48.7551 181.025 46.0655H168.424ZM224.557 46.4523V62.5167H215.438V18.2475H221.02H224.576H230.397C233.897 18.2475 236.9 18.8371 239.369 20.0161C241.837 21.1951 243.735 22.8532 245.043 24.9902C246.351 27.1272 247.014 29.5958 247.014 32.4144C247.014 35.5278 246.204 38.2175 244.582 40.4835C242.961 42.731 240.64 44.3706 237.637 45.3838L249.685 62.5167H238.853L228.463 46.4523H224.557ZM224.557 39.2307H229.808C232.166 39.2307 234.045 38.6596 235.445 37.499C236.845 36.3384 237.545 34.7172 237.545 32.6539C237.545 30.5537 236.845 28.9141 235.445 27.7535C234.045 26.5929 232.166 26.0218 229.808 26.0218H224.557V39.2307ZM252.246 40.3729C252.246 37.0016 252.836 33.9066 254.015 31.1064C255.194 28.3062 256.852 25.8744 258.952 23.8295C261.07 21.7847 263.539 20.2003 266.395 19.0581C269.25 17.9159 272.345 17.3448 275.679 17.3448C279.051 17.3448 282.164 17.9159 285.001 19.0581C287.838 20.2003 290.307 21.7847 292.444 23.8295C294.581 25.8744 296.221 28.3062 297.381 31.1064C298.542 33.9066 299.131 37.0016 299.131 40.3729C299.131 43.7074 298.542 46.8024 297.381 49.6394C296.221 52.4949 294.599 54.9451 292.499 57.0453C290.399 59.127 287.93 60.7482 285.093 61.9088C282.238 63.0694 279.106 63.6405 275.679 63.6405C272.253 63.6405 269.121 63.0694 266.266 61.9088C263.41 60.7482 260.942 59.127 258.86 57.0453C256.76 54.9635 255.138 52.4949 253.978 49.6394C252.836 46.8024 252.246 43.7074 252.246 40.3729ZM261.881 40.3729C261.881 43.1916 262.471 45.7154 263.65 47.9077C264.829 50.1 266.468 51.8133 268.532 53.066C270.595 54.3187 272.99 54.9267 275.698 54.9267C278.406 54.9267 280.783 54.3003 282.864 53.066C284.928 51.8133 286.567 50.1 287.746 47.9077C288.925 45.7154 289.515 43.21 289.515 40.3729C289.515 37.5359 288.944 35.0304 287.801 32.8381C286.659 30.6459 285.057 28.9326 282.993 27.6798C280.911 26.4455 278.48 25.8376 275.698 25.8376C272.99 25.8376 270.613 26.464 268.532 27.6983C266.468 28.951 264.829 30.6643 263.65 32.8566C262.471 35.0488 261.881 37.5543 261.881 40.3729ZM314.735 38.107L311.88 62.5167H302.374L308.969 16.0184L327.594 44.5548L346.09 16.0184L352.814 62.5167H343.179L340.324 38.107L327.594 58.4085L314.735 38.107ZM367.387 42.7863V54.7977H386.785V62.5167H367.387H364.347H358.525V18.2475H364.347H367.387H386.785V25.9481H367.387V35.2515H385.514V42.7863H367.387Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2619_2">
                <rect
                  width="289.785"
                  height="48.7643"
                  fill="white"
                  transform="translate(97 16)"
                />
              </clipPath>
            </defs>
          </svg>

          <span
            class="bg-clip-text text-transparent ml-2 bg-gradient-to-r from-red-600 via-pink-500 to-purple-600"
            >Summit</span
          >
        </a>

        <div class="flex w-1/2 justify-end content-center hidden md:flex">
          <a
            class="inline-block text-white no-underline hover:text-red-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
            href="https://twitter.com/intent/tweet?url=#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>
          <a
            class="inline-block text-white no-underline hover:text-red-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
            href="https://www.facebook.com/sharer/sharer.php?u=#"
          >
            <!-- Facebook -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              />
            </svg>
          </a>
          <a
            class="inline-block text-white no-underline hover:text-red-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
            href="https://www.facebook.com/sharer/sharer.php?u=#"
          >
            <!-- Linkedin -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
              />
            </svg>
          </a>
          <a
            class="inline-block text-white no-underline hover:text-red-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
            href="https://www.facebook.com/sharer/sharer.php?u=#"
          >
            <!-- Instagram -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>`,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
