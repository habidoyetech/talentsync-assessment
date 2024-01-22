import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
        <div class="app__footer">
            <div class="footer__main">
                <div class="main-one">
                    <img class="logo"alt='brand-logo' src="data:image/png;base64,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"/>
                    <p>ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
                </div>
                <ul>
                    <li class="footer__title">Product</li>
                    <li>Overview</li>
                    <li>Features</li>
                    <li>Solutions</li>
                    <li>Tutorials</li>
                    <li>Pricing</li>
                </ul>
                <ul>
                    <li class="footer__title">Company</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <li class="footer__title">Resources</li>
                    <li>Blog</li>
                    <li>Events</li>
                    <li>Help Center</li>
                    <li>Tutorials</li>
                    <li>Support</li>
                </ul>
                <ul>
                    <li class="footer__title">Legal</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                    <li>Licencies</li>
                    <li>Contact</li>
                </ul>
                <div class="app__logo">
                    <p>Get the app</p>
                    <img alt='playstore' src="data:image/png;base64,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" />
                    <img alt='apple' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAoCAYAAAAlprK8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAsTSURBVHgB7VxrbBTXFT5jO8UU2tgEV2lj7HX6IA1toYFS1Cg1jlICSQkQWqmJirAVBUdqWhuVEtEi2f5T8qPh0UikDylgUXB/FVBUShs1xmpISIACAiWQBLymJsUPbAMNrB2zp+e7s2dyGdb2jF9gez/peGbu3tfc++2555x7vQ4lsGXLlqzMzMwyZi6WxwilMBYRdRxnXywWqyopKYkiwcEfIUdk3LhxtXv37o3s2bOHWltbKYWxh5ycHJo/fz4tWLAg2tnZWaQkoR07dtRLIsttSlLCQhIWTtTKPTnbtm2b29jYWLtmzRpKIQXF2rVraerUqUVpgrmHDh2iFFKw0dDQQOnp6TPSKIUUkuDKlSskDktWBo0wzJgxw1yPHj3qpUUiEe++o6ODsrKyriuDNAiAz3Bvl/Hn6autaDTqPWt9oxbbt2+vXLp0ad/Gy50RnvTyz3jSth/zp+cUDLvhJBPD9fX1fOTIEa6trTX3MjkmHcAzZOPGjbx161Zzr+nl5eVePfhs7ty5po729nYjyLN48WIvjxDjhrbQDj4DtD6k4fPhHovhEHAC3AhMkIynKjjtjTaeePLXPKF+FX9m/UJ2cj87bB1ONok2cXoilD9dCYJ7JUqytjQPpLKy0sunhEL9Y4EggW2QbpE4Z9OVtlK6RndQ54/uoYmHn6XxqwspM+8OGkrIZBm1vmvXLu8Zqh1XAPcyiUZ0WRhoW/v27fPStF60A9m0aRNiRzQWENxIddzccZ5EnedLKX5NyJL2McWem02xV35AmU8ObGJ6g21X4Lp8+XIj8u2lwUYyG8YPWcbMVQk6mhGcIGnCkHThCUrEs6n73DPE3ZPc9PzbKbZ5HmUdL6eJ359Ggw0YiZg0WWLMBEqEz6Sp8Yg01SC2QdkfQHvY2gmoqKgw9drG6MqVK2nDhg002hHci3HY0ElsNPdRNAg3rCD+4h+Ibms3CqYj9zaiPz1KGTsi1P38v4jOXqLBQlFRkdEYZWVlnqpHGgDPQuwCc797924SI5L6C5BgyZIltHPnTo8sSkobIAyWmsLCQhrNCEEQxxDESdwzbJlrokFOlxLd/XviT7W7eYRA3U9OkyVnOmXWnKTYujqKnb1AAwUmq6CgwHyzMWG2pkC6Qr/lyK8EsmGTB3aG7bIqUHeQtqCx/O7yaEM4DZJOCXK4j0aXdMt6fcYlCSlJBDExa2NPfIno/hyidfuJak7QYMA2HhXJJrmndH/MoqeyQdvqrfxoQAgj1dUg3lKTnnjGVZYb58wKoq7sG4vlC4FeesTYJ3c9MZ1SGFkI5cU4Qg5DDGiShDjGcJV0WW6c+tIbSKI2S9adV+n1VVHa+UIGRT5PKYwQhAi1CwnEY3Hi7hVwGJYI7t1naBIsN47aJKYYU6T7MtXW/5ki8YuU/12ixQ9l0ta/ZlLV5hhFG2MUFsXFxcbNxfoPUY+mqqrqpqp82DcakwkDlElmWOOdNPYDwItDPEaCfcP3noFD7c9WMr0bZ+cdmfETwpLjcj3G7PxbrodE3hZ5U2S/yIE2puZ1TB2ruaC5lOvfvJ15v1DlgFDqoFyPEMePO1z/qsPlxRmBo3sauVRoVNOGEOemRB4pEYFlV2WGEt0uSAY7zI8oMGBHeYdKQkdSzRIjmoNRApoEtgicFm+ZIXfBgqdjDNcVVHA5jV57TzRH18WERcsJI1bKy33+XUTr11yj5Y/33Tw0BdxceBYwHuGhZGdnG68CV7ih+FYdO3aMRiqgMfBeKtXV1d579xW8GyqEXGLkEqdEVNXRZG/uP8npUKSli1578X2KPN5FNJkSxGAvf6K0S7QAQLAKgwWViziFDXgmULuQkQy8h+054T4/P998KQa6hdBfhIukJsLt6s04Ji7iahJjtOI5XWyOjvP0z5d+QflnLhG/PJOofbwxVjnhH7uesENtF5l+UkFU/ZfemwYxYHdgABHB7A9QBwa6t7iFRlB7mwzkwedBJ0zz9zcsX1dXZ6499Vv7rPtTg40QB4Y4EShjz9W9zt1Nc72ZvPZmevW3z1HehWbZt5H0NiHHH12SJEIkFJcP1lcz3f0Q0eaavlvWycBghTXOUBZRVghUNa7YaLMHXNW42DTmKtv8Jp+fBIjiIh2fQxBtRRmN4vph59e2w2oCGONAsvfW+lG39huaFkRBvyB+0iA/vqxBA3yh4iCemwtbxEloFNUqcgU5/v7CaprS2iSdcAxBIHwhk+h3Mw1Z/vEW0fQfEv38N0SXPgrWdLKDOwoMjKudrhdoHJ14XBEWh/ZBHfjM3o21bRvksdd+HUgMPDbpVIuhvt6+tWhDN/XgXanms+v0A+m6pwTRvOiXP2iHtu3+oA1Ad57RP/QN/bD7hPpCeUGBvZiyCqaoTLsY6s5pmfYPRN6XmTglno14N/l15/mdh4v5o5nz+eq35nNMpHP2PP742/O4e873+OQ3v8P350zsl0UtL2asdxwG8n+mh4NU4NkAKCMkuO6Aj4p6QvAGtG7ktfOgjKbjYJLfo4CgvKaTz4vRe82PvDiAlOw9evNiREuZ9imJF6NnUnBOBmm4+vuMNpO9d19jHvrAEJVXsBMVUsh7O0IUOiPyARuS5L3exCfmlfDl+x7h/923gK/MWsBXZ4EkD/N/Zz7IT38ut1/EUMHhIHVr+8qLwddBULL48+hAIq+d385jk0KJIAbyDXUpMW1S2JMjmscjBj7H4SOdcD9BkA9tqfjz+Qkiu8lJSaVkB7k0v91GkDFXgoTwYhxvn8U1NsnYInktLfRK1RrKbWmWZcfNF5cMkBebo/T8h6fpcrybBgIsC1CxUKsIKKnq9gMqddGiRV6ZIGdF7XMmNrSsXQfWdD96Oz+ixqy65cn2dvx19ZVHgeUCY6EBQpTF+GApVGCZQXANtoq+B9LCIFQcxOUFe7ZHXmsL7V77S8ptak7YHI5xcf/W0UL3Hq+jXzWeGjA5FLqG4wxGsqij397AgOh2vRp6Cn3GZKhd48+DQQU0Sov6MNh+4zaZ0WnvAMMlV3L4bYKBQL0ijAtcf9TPiW0Nhdou6LeelAsdCgi8xKysZGpgT/LeauLDDz7NLV97jFu/vpDbvrGQa7/8AM+ekB146QgrsBd02YC6hgqFmtUDyIB9RhRLk6ZD7cKu0HXYPq+qSwDqQx61XVBWbQi1SfQQNJYOuy9E19sguozpsoIy2g7eg5IsMX2db7WXGNRp90f7bC8xRJ/YSYDfFqNBtUGEIM5ZNjLl7SY+WLSCz9+7iJunPcYn7pnHyyflDRkx/IOpA2UDk4VB8+fXE+o2MBH2+p6sTkymHoxW0Umx60lmg9iEttvuqY/9IQie1X5S6LPf4FbYBvYQEESM1P+45DhQWMrnvrqYT019lFfmTOWJacH3UwZLMMFqzAV5cUx2MsPPP1F91aftKnmCTKzm763tgXxhensv1SB+0gw+QZ4q4ykHm/iNB57hhq8s4a25c/gLGeMH/YVvVcFS5ndzxU7p1+APp+iSGkZ72AQJ7sXs3Umrjp2n9z5spJ+2v0uHr7bRWAL+V1UNYT1ErUcSNUh1q0G3F3o6WhkEwQly7iyViYxVaNQSbiS8AkAjr7fqsUP0E30M69raGHH/m3szoTvGI+X/cUHqnmJGQZEmy1PHhAkTKIXgGNX/rO0DCHI0Ly+PUkjBxqxZs2TXPb7PPODnhlI/QZUSlcRPUNXLvWuDOI5TsmzZstqcnJzUj9iNYUyePBk/YGd+xE44UYQ0PflHNTU1COdVym0hpX4Gc6xC9um5uqura2NJSYkxtP4PDfcrzow1Mg0AAAAASUVORK5CYII="/>
                </div>
            </div>
            <div class="copyright">
                <p>© 2023 ClearLink. All rights reserved.</p>
                <span class="socials">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Footer