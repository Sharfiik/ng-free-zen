/**
 * @function FooterLogo
 * @returns {string} HTML
 */

export const FooterLogo = () => `
  <svg width="216" height="23" viewBox="0 0 216 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.5079 14.4568C35.6565 14.5989 35.7378 14.808 35.7295 15.0252C35.7295 15.6371 35.4063 15.9426 34.7635 15.9426H29.2282C28.8034 15.971 28.4358 15.6148 28.4109 15.1469C28.4091 15.1185 28.4091 15.0891 28.41 15.0597C28.41 14.745 28.5282 14.4467 28.736 14.2325L33.3053 8.82937H29.7684C29.5375 8.84662 29.3076 8.77355 29.122 8.62132C28.9705 8.47416 28.8893 8.25901 28.9003 8.03676C28.9003 7.43697 29.2217 7.13657 29.8663 7.13657H35.156C35.3795 7.12439 35.5984 7.21979 35.7535 7.39739C35.8976 7.56484 35.977 7.78811 35.9742 8.0195C35.9687 8.33614 35.8505 8.63959 35.6473 8.86489L31.0945 14.2498H34.8605C35.0914 14.2325 35.3222 14.3056 35.5079 14.4568ZM38.4307 10.7373H42.1643C42.2133 10.1436 42.0618 9.54993 41.7386 9.07294C41.4246 8.68424 40.9656 8.47619 40.4937 8.50563C39.3366 8.50563 38.6495 9.24953 38.4307 10.7383V10.7373ZM43.713 11.737C43.5837 11.876 43.4082 11.9521 43.2291 11.944H38.366C38.3522 12.6098 38.571 13.2542 38.9783 13.7454C39.4151 14.1777 39.9904 14.398 40.5759 14.3584C40.9268 14.3635 41.2778 14.3117 41.6158 14.2062C41.9408 14.0955 42.252 13.9423 42.5411 13.7454C42.6658 13.6662 42.8061 13.6236 42.9502 13.6196C43.1192 13.6114 43.2826 13.6957 43.3842 13.8449C43.4904 14.0042 43.5458 14.197 43.5394 14.3939C43.5412 14.739 43.3879 15.0627 43.1303 15.2586C42.7747 15.5306 42.3786 15.7325 41.9593 15.8533C41.4662 16.0096 40.9573 16.0887 40.4448 16.0867C39.7014 16.106 38.9654 15.9233 38.2995 15.5559C37.703 15.219 37.2108 14.6943 36.8829 14.0519C36.5394 13.3567 36.3667 12.5732 36.3842 11.7816C36.3704 10.9129 36.5449 10.0523 36.8912 9.27084C37.208 8.55738 37.702 7.95861 38.3162 7.5415C38.9478 7.12134 39.6737 6.90518 40.4125 6.91938C41.3766 6.85443 42.3185 7.25531 42.9917 8.01849C43.6428 8.89939 43.9679 10.0178 43.9004 11.1524C43.9134 11.3676 43.8432 11.5787 43.7121 11.737H43.713ZM52.1397 7.72113C52.643 8.3808 52.8924 9.23126 52.837 10.0898C52.837 10.3172 52.8305 10.4917 52.8185 10.6125L52.4916 14.9703C52.4842 15.2728 52.366 15.558 52.1638 15.7619C51.956 15.9598 51.6854 16.0623 51.4111 16.0512C51.1405 16.0695 50.8746 15.9649 50.6733 15.763C50.4932 15.5498 50.4082 15.2586 50.4452 14.9703L50.773 10.7028C50.8598 9.36928 50.3796 8.70353 49.3324 8.70353C48.806 8.67105 48.2935 8.88722 47.9231 9.29722C47.5602 9.75899 47.3524 10.3436 47.334 10.9545L47.0227 14.9703C47.0154 15.2728 46.8971 15.558 46.6949 15.7619C46.4871 15.9598 46.2165 16.0623 45.9423 16.0512C45.6745 16.0705 45.4085 15.9659 45.2127 15.763C45.0373 15.5468 44.9504 15.2586 44.9754 14.9703L45.4999 7.98195C45.5008 7.69271 45.6218 7.41769 45.8268 7.23501C46.0457 7.04523 46.319 6.94679 46.597 6.95592C46.851 6.93968 47.0985 7.03711 47.285 7.22587C47.4522 7.4187 47.5251 7.68561 47.4817 7.94643L47.4642 8.28844C47.7431 7.85205 48.1208 7.50395 48.5622 7.27966C49.0433 7.03508 49.5697 6.91126 50.1016 6.9204C50.8533 6.86052 51.593 7.15179 52.1397 7.72215V7.72113ZM19.9176 6.67176C19.0828 5.25703 17.4169 4.75162 16.0399 5.49451C14.5698 6.31655 13.9834 8.2925 14.7286 9.90919C15.1543 10.8307 15.9494 11.4792 16.8748 11.6588C16.7621 15.5559 13.7977 18.6168 10.2525 18.493C6.80975 18.3732 4.06609 15.287 4.03469 11.4985C4.02915 8.57971 5.67849 5.96744 8.16819 4.9546C8.64655 4.76481 8.9236 4.21374 8.81278 3.66673L8.80539 3.63323C8.68349 3.03446 9.02518 2.44178 9.56819 2.3068C9.61252 2.29665 9.65777 2.28853 9.70302 2.28447C9.95236 2.2591 10.2045 2.24591 10.4566 2.24591C10.7687 2.24591 11.0818 2.2662 11.3911 2.30274C11.9526 2.37074 12.4587 1.92419 12.5187 1.30817C12.5215 1.28787 12.5233 1.26554 12.5243 1.24525C12.539 0.633279 12.1161 0.11468 11.562 0.0639368C11.1944 0.0202974 10.825 0 10.4566 0C4.68205 0 0 5.14945 0 11.5005C0 17.8526 4.68205 23 10.4566 23C16.232 23 20.9132 17.8526 20.9132 11.5005C20.9132 10.376 20.7072 7.95252 19.9176 6.67176Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4007 0.872681C14.9982 0.872681 15.484 1.4065 15.484 2.06414C15.484 2.72177 14.9982 3.2556 14.4007 3.2556C13.8023 3.2556 13.3175 2.72177 13.3175 2.06414C13.3175 1.4065 13.8023 0.872681 14.4007 0.872681ZM61.031 10.4114C61.6285 10.4114 62.1143 10.9443 62.1143 11.6029C62.1143 12.2605 61.6285 12.7944 61.031 12.7944C60.4326 12.7944 59.9468 12.2605 59.9468 11.6029C59.9468 10.9432 60.4326 10.4114 61.031 10.4114ZM74.7115 7.61142C74.8186 7.74031 74.8731 7.90066 74.8731 8.09145C74.8731 8.34009 74.79 8.55829 74.6265 8.7501L69.9934 14.3349H73.9524C74.1574 14.3349 74.3153 14.3918 74.428 14.5044C74.5397 14.6171 74.597 14.7683 74.597 14.9601C74.597 15.1844 74.5351 15.3559 74.4123 15.4746C74.2904 15.5924 74.1103 15.6512 73.8757 15.6512H68.5371C68.3404 15.6512 68.1898 15.5903 68.0836 15.4655C67.9765 15.3437 67.923 15.1844 67.923 14.9936C67.923 14.7693 68.0042 14.5612 68.1677 14.3694L72.8174 8.73386H69.1189C68.9139 8.73386 68.7559 8.67703 68.6433 8.56438C68.5325 8.45173 68.4752 8.30051 68.4752 8.1087C68.4752 7.64694 68.7107 7.41758 69.1807 7.41758H74.2599C74.4538 7.41758 74.6043 7.48151 74.7124 7.6104L74.7115 7.61142ZM77.9132 9.0708C77.5438 9.47675 77.3083 10.0654 77.2067 10.8428H81.1648C81.186 10.0664 81.0392 9.47573 80.7279 9.0708C80.4158 8.66485 79.9735 8.46391 79.4009 8.46391C78.7766 8.46391 78.2807 8.66587 77.9132 9.0708ZM82.3551 11.6435C82.2462 11.7622 82.1021 11.8211 81.9165 11.8211H77.1448C77.1559 12.6533 77.3499 13.2977 77.7285 13.7544C78.1071 14.2091 78.6538 14.4374 79.3695 14.4374C80.0852 14.4374 80.7501 14.2121 81.3642 13.7615C81.4769 13.6824 81.5896 13.6438 81.7022 13.6438C81.8454 13.6438 81.9626 13.7057 82.0541 13.8295C82.1464 13.9533 82.1926 14.0985 82.1926 14.268C82.1926 14.5278 82.091 14.746 81.8869 14.9266C81.6099 15.1732 81.2294 15.3762 80.7436 15.5335C80.257 15.6918 79.7694 15.77 79.2781 15.77C78.5411 15.77 77.8966 15.6066 77.3452 15.2808C76.7911 14.954 76.3663 14.4872 76.0634 13.8803C75.7615 13.2713 75.6109 12.5701 75.6109 11.7714C75.6109 10.8813 75.7661 10.0918 76.0791 9.39962C76.3904 8.70748 76.8272 8.17163 77.3905 7.78902C77.9529 7.40641 78.603 7.21359 79.339 7.21359C80.3623 7.21359 81.1472 7.5485 81.6939 8.21831C82.2406 8.88812 82.5158 9.85834 82.5158 11.129C82.5158 11.3543 82.4613 11.5258 82.3542 11.6435H82.3551ZM88.9202 7.38307C89.0384 7.49572 89.0975 7.65912 89.0975 7.87224C89.0975 8.38982 88.8417 8.67094 88.33 8.7156L87.9163 8.76634C87.2099 8.8455 86.6862 9.0708 86.3427 9.44123C86.001 9.81267 85.8043 10.3597 85.7517 11.0792L85.4608 14.9256C85.4405 15.2067 85.3537 15.4127 85.2004 15.5416C85.0462 15.6715 84.8568 15.7365 84.6324 15.7365C84.4071 15.7365 84.2261 15.6685 84.0876 15.5335C83.95 15.3985 83.8909 15.1966 83.9121 14.9256L84.4173 8.02447C84.4274 7.77684 84.5151 7.58605 84.6786 7.45005C84.8421 7.31609 85.0314 7.24911 85.2456 7.24911C85.4506 7.24911 85.6132 7.31305 85.7369 7.44193C85.8597 7.57184 85.9161 7.75959 85.9059 8.00722L85.8597 8.70037C86.3704 7.83367 87.1794 7.35567 88.2839 7.26535L88.4538 7.24911C88.6477 7.22678 88.8038 7.27144 88.9202 7.38307ZM94.6162 13.5423C94.9948 12.9578 95.186 12.1712 95.186 11.1797C95.186 10.3363 95.0077 9.6919 94.6559 9.24739C94.3031 8.80389 93.798 8.58163 93.1451 8.58163C92.4275 8.58163 91.8799 8.87392 91.5013 9.45848C91.1245 10.0441 90.9352 10.8316 90.9352 11.8211C90.9352 12.6766 91.1116 13.3231 91.4634 13.7625C91.8171 14.2 92.325 14.4202 92.9899 14.4202C93.6973 14.4202 94.2385 14.1269 94.6162 13.5423ZM91.0719 15.2808C90.5307 14.955 90.1114 14.4882 89.815 13.8803C89.5176 13.2713 89.3699 12.5701 89.3699 11.7704C89.3699 10.8468 89.5259 10.0451 89.8381 9.35801C90.1493 8.67196 90.5898 8.14321 91.1568 7.77177C91.7248 7.40032 92.3823 7.2146 93.1285 7.2146C93.8645 7.2146 94.5044 7.38003 95.0456 7.71189C95.5886 8.04477 96.0079 8.51161 96.3043 9.11241C96.6017 9.71423 96.7494 10.4216 96.7494 11.2304C96.7494 12.153 96.5943 12.9557 96.2821 13.6357C95.9682 14.3156 95.5295 14.8424 94.9616 15.2128C94.3945 15.5842 93.7333 15.77 92.9761 15.77C92.2493 15.77 91.6149 15.6066 91.0719 15.2808ZM104.375 9.0708C104.007 9.47675 103.772 10.0654 103.669 10.8428H107.628C107.648 10.0664 107.502 9.47573 107.19 9.0708C106.879 8.66485 106.436 8.46391 105.863 8.46391C105.239 8.46391 104.743 8.66587 104.375 9.0708ZM108.817 11.6435C108.709 11.7622 108.564 11.8211 108.379 11.8211H103.608C103.618 12.6533 103.812 13.2977 104.192 13.7544C104.569 14.2091 105.117 14.4374 105.834 14.4374C106.549 14.4374 107.212 14.2121 107.827 13.7615C107.939 13.6824 108.053 13.6438 108.165 13.6438C108.308 13.6438 108.425 13.7057 108.518 13.8295C108.61 13.9533 108.655 14.0985 108.655 14.268C108.655 14.5278 108.553 14.746 108.348 14.9266C108.072 15.1732 107.692 15.3762 107.206 15.5335C106.721 15.6918 106.232 15.77 105.74 15.77C105.004 15.77 104.359 15.6066 103.808 15.2808C103.255 14.954 102.827 14.4872 102.527 13.8803C102.225 13.2713 102.074 12.5701 102.074 11.7714C102.074 10.8813 102.229 10.0918 102.542 9.39962C102.855 8.70748 103.291 8.17163 103.853 7.78902C104.416 7.40641 105.065 7.21359 105.801 7.21359C106.824 7.21359 107.61 7.5485 108.157 8.21831C108.704 8.88812 108.977 9.85834 108.977 11.129C108.977 11.3543 108.925 11.5258 108.817 11.6435ZM113.409 5.59487C113.148 5.90948 112.992 6.37632 112.941 6.99539L112.909 7.41758H114.429C114.634 7.41758 114.79 7.4734 114.897 7.58605C115.004 7.69768 115.058 7.84991 115.058 8.04071C115.058 8.50247 114.823 8.73285 114.353 8.73285H112.818L112.373 14.9256C112.363 15.1966 112.279 15.3985 112.121 15.5345C111.961 15.6685 111.775 15.7375 111.56 15.7375C111.345 15.7375 111.167 15.6685 111.023 15.5345C110.88 15.3985 110.813 15.1966 110.824 14.9256L111.268 8.73285H110.363C110.159 8.73285 110 8.67703 109.888 8.56438C109.774 8.45173 109.719 8.30051 109.719 8.1087C109.719 7.88442 109.78 7.7129 109.903 7.59416C110.025 7.47542 110.205 7.41758 110.439 7.41758H111.362L111.376 7.19735C111.54 5.03872 112.598 3.8909 114.551 3.75593L114.875 3.73867C115.416 3.70518 115.687 3.90207 115.687 4.32933C115.687 4.54245 115.632 4.70686 115.518 4.8185C115.406 4.93115 115.242 4.99813 115.029 5.02045L114.613 5.05395C114.071 5.09961 113.669 5.28026 113.409 5.59487ZM119.333 5.59487C119.072 5.90948 118.916 6.37632 118.864 6.99539L118.834 7.41758H120.353C120.559 7.41758 120.714 7.4734 120.821 7.58605C120.928 7.69768 120.982 7.84991 120.982 8.04071C120.982 8.50247 120.746 8.73285 120.277 8.73285H118.742L118.297 14.9256C118.287 15.1966 118.203 15.3985 118.044 15.5345C117.885 15.6685 117.699 15.7375 117.483 15.7375C117.269 15.7375 117.09 15.6685 116.947 15.5345C116.804 15.3985 116.737 15.1966 116.747 14.9256L117.193 8.73285H116.288C116.083 8.73285 115.924 8.67703 115.812 8.56438C115.698 8.45173 115.642 8.30051 115.642 8.1087C115.642 7.88442 115.704 7.7129 115.827 7.59416C115.949 7.47542 116.129 7.41758 116.364 7.41758H117.285L117.301 7.19735C117.464 5.03872 118.522 3.8909 120.475 3.75593L120.798 3.73867C121.34 3.70518 121.61 3.90207 121.61 4.32933C121.61 4.54245 121.555 4.70686 121.442 4.8185C121.329 4.93115 121.165 4.99813 120.952 5.02045L120.536 5.05395C119.995 5.09961 119.594 5.28026 119.333 5.59487ZM126.582 13.5423C126.96 12.9578 127.15 12.1712 127.15 11.1797C127.15 10.3363 126.974 9.6919 126.62 9.24739C126.268 8.80389 125.763 8.58163 125.11 8.58163C124.392 8.58163 123.846 8.87392 123.467 9.45848C123.088 10.0441 122.901 10.8316 122.901 11.8211C122.901 12.6766 123.076 13.3231 123.429 13.7625C123.782 14.2 124.29 14.4202 124.955 14.4202C125.662 14.4202 126.202 14.1269 126.582 13.5423ZM123.037 15.2808C122.495 14.955 122.077 14.4882 121.779 13.8803C121.484 13.2713 121.334 12.5701 121.334 11.7704C121.334 10.8468 121.491 10.0451 121.803 9.35801C122.114 8.67196 122.554 8.14321 123.123 7.77177C123.689 7.40032 124.348 7.2146 125.093 7.2146C125.83 7.2146 126.469 7.38003 127.011 7.71189C127.554 8.04477 127.971 8.51161 128.27 9.11241C128.566 9.71423 128.715 10.4216 128.715 11.2304C128.715 12.153 128.558 12.9557 128.247 13.6357C127.934 14.3156 127.494 14.8424 126.926 15.2128C126.36 15.5842 125.698 15.77 124.941 15.77C124.214 15.77 123.58 15.6066 123.038 15.2808H123.037ZM135.121 7.38307C135.239 7.49572 135.298 7.65912 135.298 7.87224C135.298 8.38982 135.042 8.67094 134.532 8.7156L134.116 8.76634C133.412 8.8455 132.887 9.0708 132.544 9.44123C132.202 9.81267 132.005 10.3597 131.953 11.0792L131.662 14.9256C131.641 15.2067 131.555 15.4127 131.402 15.5416C131.247 15.6715 131.059 15.7365 130.834 15.7365C130.608 15.7365 130.428 15.6685 130.287 15.5335C130.151 15.3985 130.092 15.1966 130.113 14.9256L130.619 8.02447C130.629 7.77684 130.716 7.58605 130.88 7.45005C131.043 7.31609 131.232 7.24911 131.446 7.24911C131.651 7.24911 131.815 7.31305 131.939 7.44193C132.061 7.57184 132.118 7.75959 132.106 8.00722L132.061 8.70037C132.571 7.83367 133.379 7.35567 134.486 7.26535L134.654 7.24911C134.848 7.22678 135.005 7.27144 135.121 7.38307ZM138.651 12.5975C138.641 12.6645 138.637 12.7659 138.637 12.9019C138.637 13.4073 138.741 13.792 138.952 14.0569C139.16 14.3217 139.455 14.4527 139.834 14.4527C139.956 14.4527 140.078 14.4445 140.2 14.4293C140.324 14.411 140.422 14.4039 140.493 14.4039C140.615 14.4039 140.714 14.4567 140.785 14.5633C140.856 14.6709 140.892 14.819 140.892 15.0098C140.892 15.292 140.793 15.4888 140.593 15.6015C140.393 15.7131 140.042 15.77 139.542 15.77C138.764 15.77 138.16 15.5335 137.731 15.0616C137.301 14.5876 137.086 13.9249 137.086 13.0694C137.086 12.8898 137.092 12.7497 137.103 12.6472L137.379 8.73386H136.473C136.268 8.73386 136.11 8.67703 135.997 8.56438C135.885 8.45274 135.828 8.29443 135.828 8.09145C135.828 7.87833 135.89 7.7129 136.013 7.59416C136.136 7.47644 136.314 7.41656 136.549 7.41656H137.47L137.592 5.66185C137.613 5.4264 137.7 5.23561 137.854 5.08744C138.008 4.94231 138.196 4.86924 138.422 4.86924C138.657 4.86924 138.84 4.94231 138.974 5.08744C139.108 5.23561 139.162 5.43249 139.143 5.67911L139.019 7.41656H140.539C140.733 7.41656 140.886 7.4734 141.001 7.58503C141.112 7.69768 141.167 7.8489 141.167 8.04172C141.167 8.50349 140.932 8.73386 140.462 8.73386H138.928L138.651 12.5975ZM152.314 7.94024C152.748 8.42433 152.966 9.13778 152.966 10.0836C152.966 10.3089 152.962 10.4774 152.951 10.5901L152.644 14.9256C152.623 15.1844 152.539 15.3843 152.391 15.5254C152.243 15.6654 152.052 15.7365 151.816 15.7365C151.581 15.7365 151.396 15.6654 151.263 15.5254C151.13 15.3843 151.074 15.1844 151.094 14.9266L151.403 10.6743C151.411 10.5951 151.417 10.4774 151.417 10.3191C151.417 9.17229 150.916 8.59787 149.914 8.59787C149.279 8.59787 148.776 8.80592 148.402 9.22202C148.028 9.63811 147.817 10.2186 147.765 10.9605L147.473 14.9256C147.453 15.1844 147.369 15.3843 147.221 15.5254C147.072 15.6654 146.88 15.7365 146.645 15.7365C146.411 15.7365 146.228 15.6654 146.1 15.5254C145.973 15.3843 145.914 15.1844 145.925 14.9266L146.431 8.02548C146.441 7.78902 146.528 7.59924 146.692 7.45919C146.856 7.31812 147.05 7.24809 147.274 7.24809C147.488 7.24809 147.658 7.31609 147.781 7.45107C147.904 7.58605 147.959 7.77177 147.95 8.00722L147.904 8.59787C148.16 8.15945 148.504 7.81947 148.94 7.57793C149.374 7.33537 149.863 7.2146 150.405 7.2146C151.243 7.2146 151.88 7.45614 152.314 7.94024ZM159.735 13.5423C160.114 12.9578 160.303 12.1712 160.303 11.1797C160.303 10.3363 160.126 9.6919 159.773 9.24739C159.422 8.80389 158.916 8.58163 158.263 8.58163C157.546 8.58163 156.999 8.87392 156.62 9.45848C156.243 10.0441 156.053 10.8316 156.053 11.8211C156.053 12.6766 156.229 13.3231 156.582 13.7625C156.935 14.2 157.444 14.4202 158.108 14.4202C158.815 14.4202 159.357 14.1269 159.735 13.5423H159.735ZM156.191 15.2808C155.65 14.955 155.229 14.4882 154.932 13.8803C154.637 13.2713 154.489 12.5701 154.489 11.7704C154.489 10.8468 154.644 10.0451 154.956 9.35801C155.269 8.67196 155.707 8.14321 156.276 7.77177C156.844 7.40032 157.501 7.2146 158.248 7.2146C158.984 7.2146 159.624 7.38003 160.164 7.71189C160.707 8.04477 161.126 8.51161 161.423 9.11241C161.72 9.71423 161.868 10.4216 161.868 11.2304C161.868 12.153 161.713 12.9557 161.4 13.6357C161.087 14.3156 160.648 14.8424 160.08 15.2128C159.513 15.5842 158.851 15.77 158.094 15.77C157.368 15.77 156.733 15.6066 156.191 15.2808ZM169.647 7.94024C170.081 8.42433 170.299 9.13778 170.299 10.0836C170.299 10.3089 170.294 10.4774 170.283 10.5901L169.977 14.9256C169.956 15.1844 169.871 15.3843 169.724 15.5254C169.576 15.6654 169.383 15.7365 169.148 15.7365C168.913 15.7365 168.729 15.6654 168.595 15.5254C168.462 15.3843 168.407 15.1844 168.426 14.9266L168.734 10.6743C168.743 10.5951 168.749 10.4774 168.749 10.3191C168.749 9.17229 168.248 8.59787 167.246 8.59787C166.612 8.59787 166.108 8.80592 165.734 9.22202C165.36 9.63811 165.15 10.2186 165.097 10.9605L164.806 14.9256C164.786 15.1844 164.701 15.3843 164.553 15.5254C164.406 15.6654 164.212 15.7365 163.977 15.7365C163.742 15.7365 163.561 15.6654 163.433 15.5254C163.305 15.3843 163.246 15.1844 163.257 14.9266L163.762 8.02548C163.773 7.78902 163.861 7.59924 164.023 7.45919C164.188 7.31812 164.381 7.24809 164.606 7.24809C164.821 7.24809 164.99 7.31609 165.114 7.45107C165.237 7.58605 165.292 7.77177 165.282 8.00722L165.236 8.59787C165.491 8.15945 165.837 7.81947 166.271 7.57793C166.705 7.33537 167.194 7.2146 167.736 7.2146C168.575 7.2146 169.212 7.45614 169.647 7.94024ZM177.461 13.5768C177.844 13.0136 178.035 12.2372 178.035 11.2477C178.035 10.3932 177.856 9.73453 177.499 9.27276C177.14 8.81201 176.631 8.58163 175.965 8.58163C175.291 8.58163 174.758 8.8658 174.369 9.43311C173.981 10.0014 173.786 10.7758 173.786 11.7531C173.786 12.6208 173.965 13.2815 174.324 13.7362C174.681 14.1929 175.192 14.4202 175.857 14.4202C176.543 14.4202 177.077 14.1391 177.461 13.5768ZM178.09 7.70377C178.575 8.03056 178.951 8.49436 179.216 9.09617C179.484 9.69799 179.616 10.3983 179.616 11.197C179.616 12.0971 179.467 12.8928 179.171 13.5849C178.876 14.2771 178.457 14.815 177.921 15.1966C177.383 15.5781 176.766 15.7689 176.073 15.7689C175.49 15.7689 174.985 15.635 174.561 15.365C174.137 15.0951 173.811 14.7125 173.587 14.2172L173.541 14.9256C173.53 15.1844 173.449 15.3843 173.295 15.5254C173.142 15.6654 172.951 15.7365 172.728 15.7365C172.502 15.7365 172.323 15.6654 172.19 15.5254C172.057 15.3843 171.997 15.1844 172.006 14.9266L172.773 4.44705C172.783 4.21059 172.87 4.02081 173.035 3.87365C173.198 3.72751 173.393 3.65342 173.617 3.65342C173.842 3.65342 174.019 3.72142 174.145 3.8564C174.275 3.99138 174.333 4.1771 174.324 4.41356L174.016 8.54713C174.271 8.13103 174.612 7.80627 175.037 7.56879C175.461 7.33233 175.923 7.2146 176.425 7.2146C177.049 7.2146 177.603 7.378 178.09 7.70377ZM185.121 13.8803C185.49 13.4642 185.698 12.9293 185.749 12.2768L185.781 11.8049H185.351C184.594 11.8049 184.001 11.8495 183.571 11.9398C183.141 12.0291 182.835 12.1763 182.651 12.3772C182.466 12.5802 182.374 12.8624 182.374 13.2216C182.374 13.6154 182.499 13.928 182.75 14.1583C183.002 14.3887 183.341 14.5034 183.771 14.5034C184.302 14.5034 184.753 14.2964 185.122 13.8803H185.121ZM187.377 10.1171C187.377 10.3303 187.372 10.4947 187.36 10.6063L187.056 14.9601C187.044 15.2077 186.97 15.3985 186.831 15.5345C186.693 15.6685 186.512 15.7375 186.286 15.7375C186.062 15.7375 185.883 15.6604 185.75 15.5081C185.618 15.3559 185.561 15.1621 185.582 14.9256L185.611 14.3522C185.397 14.814 185.102 15.1641 184.722 15.4066C184.343 15.6482 183.903 15.77 183.403 15.77C182.655 15.77 182.039 15.5477 181.555 15.1032C181.068 14.6587 180.826 14.0883 180.826 13.3911C180.826 12.7609 180.973 12.2626 181.271 11.8972C181.567 11.5319 182.039 11.2649 182.689 11.0955C183.339 10.927 184.211 10.8417 185.305 10.8417H185.858L185.888 10.4206C185.929 9.77918 185.826 9.31031 185.582 9.01194C185.337 8.71357 184.937 8.56438 184.385 8.56438C183.709 8.56438 182.963 8.81302 182.145 9.30727C182.052 9.36308 181.951 9.3915 181.838 9.3915C181.685 9.3915 181.557 9.32959 181.454 9.20578C181.352 9.08196 181.301 8.93582 181.301 8.76735C181.301 8.4974 181.429 8.2721 181.685 8.09247C182.052 7.82251 182.489 7.60837 182.996 7.45005C183.502 7.29275 184.017 7.2146 184.538 7.2146C186.43 7.2146 187.377 8.18279 187.377 10.1171ZM195.482 7.94024C195.917 8.42433 196.134 9.13778 196.134 10.0836C196.134 10.3089 196.129 10.4774 196.119 10.5901L195.812 14.9256C195.791 15.1844 195.707 15.3843 195.558 15.5254C195.41 15.6654 195.219 15.7365 194.983 15.7365C194.748 15.7365 194.564 15.6654 194.432 15.5254C194.298 15.3843 194.241 15.1844 194.262 14.9266L194.569 10.6743C194.578 10.5951 194.584 10.4774 194.584 10.3191C194.584 9.17229 194.083 8.59787 193.081 8.59787C192.447 8.59787 191.943 8.80592 191.569 9.22202C191.197 9.63811 190.983 10.2186 190.933 10.9605L190.642 14.9256C190.621 15.1844 190.537 15.3843 190.389 15.5254C190.239 15.6654 190.048 15.7365 189.813 15.7365C189.578 15.7365 189.396 15.6654 189.268 15.5254C189.141 15.3843 189.081 15.1844 189.092 14.9266L189.598 8.02548C189.607 7.78902 189.695 7.59924 189.858 7.45919C190.023 7.31812 190.217 7.24809 190.441 7.24809C190.656 7.24809 190.825 7.31609 190.948 7.45107C191.071 7.58605 191.126 7.77177 191.118 8.00722L191.072 8.59787C191.326 8.15945 191.672 7.81947 192.106 7.57793C192.541 7.33537 193.03 7.2146 193.573 7.2146C194.411 7.2146 195.048 7.45614 195.482 7.94024ZM204.101 14.4537C204.224 14.5876 204.286 14.751 204.286 14.9428C204.286 15.1458 204.206 15.3305 204.048 15.5C203.888 15.6695 203.713 15.7537 203.519 15.7537C203.334 15.7537 203.17 15.6695 203.027 15.5L199.636 11.8038L199.405 14.9428C199.385 15.2026 199.298 15.3995 199.146 15.5335C198.993 15.6695 198.809 15.7365 198.594 15.7365C198.368 15.7365 198.184 15.6634 198.041 15.5162C197.897 15.3701 197.836 15.1681 197.857 14.9093L198.609 4.46431C198.619 4.20551 198.705 4.00863 198.868 3.87264C199.032 3.73867 199.222 3.66966 199.437 3.66966C199.662 3.66966 199.841 3.7407 199.974 3.88177C200.106 4.02284 200.169 4.22683 200.157 4.4978L199.683 11.0945L203.303 7.53429C203.447 7.378 203.61 7.29884 203.795 7.29884C203.979 7.29884 204.139 7.37495 204.279 7.52718C204.416 7.67941 204.485 7.84991 204.485 8.04172C204.485 8.24368 204.408 8.42331 204.255 8.58163L201.339 11.3999L204.101 14.4537ZM215.891 3.80058C215.976 3.89395 216.011 4.02182 215.997 4.18623L215.71 8.14219C215.689 8.49943 215.534 8.67906 215.243 8.67906C215.109 8.67906 215.007 8.63441 214.937 8.5451C214.866 8.45477 214.836 8.32183 214.852 8.14219L215.031 5.62126L213.982 7.56981C213.911 7.69464 213.839 7.78496 213.769 7.83875C213.698 7.89254 213.612 7.91994 213.513 7.91994C213.422 7.91994 213.345 7.89254 213.286 7.83875C213.225 7.78395 213.171 7.69464 213.122 7.56981L212.336 5.69128L212.156 8.14219C212.149 8.32183 212.102 8.45477 212.017 8.5451C211.932 8.63441 211.82 8.67906 211.679 8.67906C211.544 8.67906 211.441 8.63441 211.37 8.5451C211.3 8.45477 211.268 8.32183 211.276 8.14219L211.562 4.18522C211.576 4.02284 211.63 3.89395 211.727 3.79957C211.822 3.70721 211.932 3.66053 212.06 3.66053C212.245 3.66053 212.385 3.7813 212.485 4.02182L213.588 6.75284L215.084 4.02284C215.219 3.7813 215.383 3.66053 215.574 3.66053C215.7 3.66053 215.806 3.70721 215.891 3.80058H215.891ZM211.009 4.12737C211.009 4.43893 210.843 4.59421 210.511 4.59421H209.471L209.216 8.15336C209.209 8.31675 209.156 8.44564 209.052 8.53901C208.951 8.63238 208.827 8.67906 208.686 8.67906C208.544 8.67906 208.43 8.63238 208.341 8.53901C208.252 8.44564 208.212 8.31675 208.219 8.15336L208.483 4.59421H207.455C207.165 4.59421 207.02 4.45416 207.02 4.17405C207.02 3.86249 207.182 3.70721 207.508 3.70721H210.574C210.865 3.70721 211.009 3.84726 211.009 4.12737Z" fill="white"/>
  </svg>
  `;
