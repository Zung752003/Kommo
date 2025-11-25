import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import Popover from '../Popover'
import { useMutation } from '@tanstack/react-query'
import { logout } from '../../apis/auth.api'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'

export default function Header() {
  const { setIsAuthenticated, isAuthenticated } = useContext(AppContext)
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setIsAuthenticated(false)
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }
  return (
    <div className='pb-5 pt-2 bg-[linear-gradient(-180deg,#47bdf0,#108EF8)]'>
      <div className='container'>
        <div className='flex justify-end'>
          <Popover
            as='span'
            className='flex items-center py-1 hover:text-gray-300 cursor-pointer'
            renderPopover={
              <div className='bg-white relative shadow-sm rounded-sm border border-gray-200'>
                <div className='flex flex-col py-2 px-3'>
                  <button className='py-2 px-3 hover:text-cyan-500'>Tiếng Việt</button>
                  <button className='py-2 px-3 hover:text-cyan-500 mt-2'>EngLish</button>
                </div>
              </div>
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
              />
            </svg>
            <span className='mx-1'>Tiếng Việt</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
            </svg>
          </Popover>
          {isAuthenticated && (
            <Popover
              className='flex items-center py-1 hover:text-gray-300 cursor-pointer ml-6'
              renderPopover={
                <div className='bg-white relative shadow-sm rounded-sm border border-gray-200'>
                  <Link
                    to='/profile'
                    className='block py-3 px-3 w-full text-left hover:bg-slate-100 bg-white hover:text-cyan-500'
                  >
                    Tài khoản của tôi
                  </Link>
                  <Link
                    to='/'
                    className='block py-3 px-3 w-full text-left hover:bg-slate-100 bg-white hover:text-cyan-500'
                  >
                    Đơn mua
                  </Link>
                  <button
                    onClick={handleLogout}
                    className='block py-3 px-3 w-full text-left hover:bg-slate-100 bg-white hover:text-cyan-500'
                  >
                    Đăng xuất
                  </button>
                </div>
              }
            >
              <div className='w-6 h-6 mr-2 flex-shrink-0'>
                <img
                  src='https://cf.shopee.vn/file/d04ea22afab6e6d250a370d7ccc2e675_tn'
                  alt='avatar'
                  className='w-full h-full object-cover rounded-full'
                />
              </div>
              <div>nguyenhoangdung</div>
            </Popover>
          )}
          {!isAuthenticated && (
            <div className='flex items-center'>
              <Link to='/register' className='mx-3 capitalize hover:text-white/70'>
                Đăng ký
              </Link>
              <div className='border-r-[1px] border-r-white/50 h-4' />
              <Link to='/login' className='mx-3 capitalize hover:text-white/70'>
                Đăng nhập
              </Link>
            </div>
          )}
        </div>
        <div className='grid grid-cols-12 gap-4 mt-4 items-end'>
          <Link to='/' className='col-span-2'>
            <svg viewBox='175 90 550 200' className='h-14'>
              <g transform='translate(0.000000,400.000000) scale(0.100000,-0.100000)' fill='white' stroke='none'>
                <path
                  d='M2310 3178 c-49 -13 -118 -89 -162 -178 -21 -42 -38 -82 -38 -90 0
-7 -4 -27 -10 -44 -5 -17 -12 -43 -15 -58 -5 -26 -9 -28 -53 -28 -26 0 -67 5
-91 11 -25 5 -48 6 -53 1 -9 -9 -12 -1437 -3 -1452 9 -14 237 0 280 18 92 38
135 92 135 172 0 31 5 50 14 53 7 3 23 26 36 51 24 51 52 60 71 24 6 -13 36
-55 65 -95 30 -40 54 -76 54 -80 1 -13 106 -113 119 -113 6 0 22 -6 34 -14 17
-11 75 -15 249 -18 124 -1 230 0 234 5 4 4 -10 24 -30 45 -21 20 -52 57 -69
82 -17 25 -36 50 -43 55 -7 6 -46 55 -87 110 -41 55 -86 114 -101 130 -15 17
-36 46 -48 65 -12 19 -26 40 -32 45 -6 6 -29 33 -51 60 -21 28 -42 52 -45 55
-3 3 -13 18 -23 33 -16 25 -16 29 -2 43 8 8 15 19 15 22 0 4 12 20 28 36 15
16 47 57 72 92 25 34 79 107 120 163 110 147 183 248 197 273 6 11 33 43 59
70 47 48 48 50 29 65 -11 8 -31 12 -45 9 -14 -3 -106 -8 -205 -12 -99 -4 -186
-11 -193 -17 -9 -7 -16 -7 -24 1 -18 18 -36 14 -43 -9 -5 -15 -10 -18 -17 -11
-8 8 -6 19 6 36 17 27 22 101 7 110 -5 3 -12 22 -15 42 -10 51 -77 156 -112
174 -16 8 -31 17 -34 21 -3 3 -21 14 -40 26 -44 26 -95 34 -140 21z m105 -48
c3 -6 -5 -14 -19 -20 -40 -15 -118 -101 -153 -169 -18 -34 -33 -67 -33 -72 0
-6 -9 -30 -21 -55 -16 -36 -24 -45 -42 -42 -27 4 -36 51 -14 76 8 10 17 30 21
46 9 39 61 142 81 162 8 9 15 21 15 27 0 7 17 22 38 34 39 23 116 31 127 13z
m69 -74 c14 -19 26 -43 26 -54 0 -10 3 -22 6 -25 12 -11 54 -121 54 -140 0
-10 6 -28 14 -40 26 -41 29 -83 8 -104 -11 -10 -31 -36 -45 -59 -14 -22 -31
-47 -39 -55 -28 -29 -88 -125 -88 -140 0 -19 -20 -39 -40 -39 -8 0 -24 16 -35
36 -10 19 -27 40 -37 45 -16 8 -17 19 -12 77 5 55 2 75 -15 114 -12 26 -30 50
-41 53 -38 12 -34 46 20 150 62 119 142 209 191 214 4 1 18 -14 33 -33z m102
-144 c-12 -11 -18 7 -10 30 l8 23 4 -23 c2 -13 1 -26 -2 -30z m35 -79 c-9 -15
-10 -12 -10 17 0 29 1 32 10 18 7 -12 7 -24 0 -35z m-495 -157 c-9 -26 -16
-53 -16 -61 0 -8 -4 -15 -10 -15 -5 0 -10 -11 -10 -25 0 -14 5 -25 10 -25 19
0 48 34 56 64 6 26 36 66 49 66 3 0 5 -33 5 -74 0 -78 20 -132 62 -166 29 -24
38 -116 38 -410 0 -313 -7 -370 -49 -409 -16 -15 -33 -41 -37 -56 -18 -74
-144 -150 -206 -124 -14 6 -30 18 -33 27 -9 22 -14 218 -19 737 -4 487 -3 490
63 500 20 4 50 12 66 19 41 19 49 6 31 -48z m807 12 c25 -13 21 -48 -14 -104
-18 -27 -36 -62 -42 -79 -13 -41 -79 -128 -122 -162 -20 -15 -47 -47 -60 -69
-13 -23 -31 -44 -39 -47 -8 -3 -22 -31 -31 -62 -9 -30 -18 -55 -20 -55 -2 0
-15 4 -29 10 -26 10 -26 9 -20 -33 4 -23 11 -50 16 -60 5 -9 6 -21 3 -26 -7
-12 86 -158 130 -204 19 -20 41 -50 119 -162 108 -153 117 -168 106 -179 -16
-16 -133 -20 -177 -6 -54 17 -112 59 -139 100 -49 75 -154 170 -188 170 -23 0
-44 27 -56 69 -6 22 -11 141 -12 265 -1 198 1 228 15 244 10 10 17 26 17 36 0
30 19 54 48 61 16 3 42 20 59 38 31 34 109 150 137 205 9 17 21 32 26 32 13 0
30 -34 30 -61 0 -12 7 -27 16 -34 15 -11 15 -15 -6 -51 -17 -29 -21 -48 -16
-67 12 -51 91 -59 116 -12 11 20 9 28 -10 59 -12 20 -25 36 -29 36 -16 0 -42
98 -36 133 l7 36 91 -6 c51 -3 100 -10 110 -15z'
                />
                <path
                  d='M4125 2455 c-27 -7 -66 -21 -85 -31 -42 -21 -136 -113 -150 -146 -5
-13 -14 -30 -19 -38 -33 -56 -41 -96 -41 -198 0 -106 15 -175 47 -213 7 -8 13
-21 13 -27 0 -7 27 -39 60 -72 33 -33 65 -60 72 -60 6 0 19 -6 27 -13 60 -51
218 -63 300 -23 99 47 158 90 174 126 4 8 16 29 27 45 21 32 24 37 46 98 19
51 19 217 -1 264 -8 19 -15 43 -15 51 0 25 -86 146 -122 173 -92 69 -220 93
-333 64z m196 -119 c66 -30 120 -81 151 -144 20 -41 23 -62 22 -157 0 -132
-14 -165 -105 -250 -65 -60 -77 -63 -208 -56 -81 4 -158 63 -216 162 -27 47
-29 241 -2 282 9 14 17 32 17 39 0 18 109 118 129 118 9 0 25 7 35 15 31 23
115 19 177 -9z'
                />
                <path
                  d='M6645 2458 c-51 -13 -54 -14 -90 -38 -16 -11 -39 -24 -51 -29 -20 -9
-94 -103 -94 -119 0 -4 -5 -13 -11 -19 -45 -45 -67 -272 -34 -350 8 -19 15
-41 15 -48 0 -19 68 -116 103 -148 17 -15 64 -43 104 -62 64 -30 84 -35 148
-35 64 0 85 5 147 34 70 33 158 98 158 116 0 5 13 28 28 52 48 73 62 124 62
228 0 95 -10 139 -47 210 -33 63 -83 129 -108 142 -139 75 -225 92 -330 66z
m171 -113 c10 -8 26 -15 34 -15 28 0 119 -90 141 -138 18 -39 22 -66 22 -157
0 -123 -11 -152 -82 -228 -64 -68 -93 -80 -190 -80 -96 0 -112 6 -184 67 -74
63 -90 108 -90 246 0 97 3 121 20 156 25 47 111 134 134 134 8 0 24 7 35 15
26 19 134 20 160 0z'
                />
                <path
                  d='M3293 2451 c-7 -5 -11 -788 -4 -823 2 -14 98 -9 110 5 11 13 1 197
-15 288 -10 59 27 63 64 7 20 -31 127 -169 168 -217 76 -89 76 -89 142 -95 57
-5 62 -4 62 14 0 11 -21 43 -47 72 -26 29 -56 64 -68 77 -11 14 -34 41 -50 60
-17 20 -47 56 -67 81 -20 25 -50 60 -67 79 -37 41 -39 60 -8 93 68 76 93 106
114 136 13 19 41 53 62 75 21 23 52 58 67 77 16 19 32 37 37 38 13 6 8 30 -8
36 -9 3 -41 3 -73 0 -56 -6 -58 -8 -107 -71 -27 -35 -69 -92 -92 -126 -23 -34
-49 -71 -58 -82 -8 -10 -15 -23 -15 -27 0 -4 -11 -8 -25 -8 -22 0 -29 8 -27
30 16 199 20 266 14 271 -10 9 -98 17 -109 10z'
                />
                <path
                  d='M4677 2443 c-2 -5 -1 -87 2 -183 4 -96 4 -274 1 -395 -4 -130 -2
-225 3 -232 5 -8 31 -13 58 -13 43 0 49 3 55 24 3 14 4 29 1 33 -3 4 -7 134
-8 288 -4 333 -4 333 87 198 32 -48 63 -97 67 -108 4 -11 19 -34 33 -52 21
-28 31 -33 68 -33 37 0 47 4 61 28 10 15 24 31 32 35 7 4 13 15 13 24 0 8 14
32 30 53 17 21 30 40 30 43 0 9 60 96 69 102 22 13 26 -41 21 -310 -3 -159 -3
-298 -1 -307 2 -14 13 -18 46 -18 23 0 47 6 53 13 8 9 10 141 9 412 l-2 400
-65 3 -66 3 -44 -71 c-25 -39 -65 -99 -90 -133 -25 -34 -53 -76 -62 -92 -9
-17 -24 -30 -33 -30 -9 0 -46 48 -90 115 -41 63 -89 136 -107 162 l-33 48 -67
0 c-37 0 -69 -3 -71 -7z'
                />
                <path
                  d='M5540 2045 c0 -457 -6 -425 80 -425 l42 0 -3 312 c-3 279 -1 313 13
316 8 2 18 -5 22 -14 3 -9 43 -72 88 -140 l82 -124 46 0 c44 0 48 2 71 41 13
22 29 48 34 57 14 23 68 105 78 117 4 6 16 22 28 38 11 15 27 27 36 27 13 0
14 -23 9 -177 -9 -283 -10 -429 -2 -441 9 -14 92 -16 101 -3 3 6 6 191 7 413
l1 403 -64 3 -64 2 -45 -62 c-25 -34 -47 -66 -49 -72 -2 -6 -23 -36 -45 -66
-23 -30 -50 -72 -61 -92 -24 -47 -49 -49 -71 -5 -9 17 -40 64 -68 104 -28 39
-68 99 -89 132 l-38 61 -70 0 -69 0 0 -405z'
                />
              </g>
            </svg>
          </Link>
          <form className='col-span-9'>
            <div className='bg-white rounded-md p-1 flex '>
              <input
                type='text'
                name='search'
                className='text-black px-3 py-2 flex-grow border-none outline-none bg-transparent'
                placeholder='Free Ship Đơn Từ 0Đ'
              />
              <button className='rounded-lg py-2 px-6 flex-shrink-0 bg-orange hover:opacity-90 bg-[#47bdf0]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='white'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className='col-span-1 justify-self-end'>
            <Popover
              renderPopover={
                <div className='bg-white relative shadow-sm rounded-sm border border-gray-200 max-w-96 text-sm'>
                  <div className='p-2'>
                    <div className='text-gray-400 capitalize'>Sản phẩm mới thêm</div>
                    <div className='mt-5'>
                      <div className='mt-4 flex'>
                        <div className='flex-shrink-0'>
                          <img
                            src='	https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m8pmvgchxl5075.webp'
                            alt='piture'
                            className='w-11 h-11 object-cover'
                          />
                        </div>
                        <div className='flex-grow ml-2 overflow-hidden'>
                          <div className='truncate'>
                            Bàn phím cơ không dây Xinmeng M75 Pro - Led RGb - Gasket Mount - Có hot-swap - Mạch 5 pin -
                            Màn LED - App Marco
                          </div>
                        </div>
                        <div className='ml-2 flex-shrink-0'>
                          <span className='text-cyan-600'>736.735₫</span>
                        </div>
                      </div>
                      <div className='mt-4 flex'>
                        <div className='flex-shrink-0'>
                          <img
                            src='	https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m8pmvgchxl5075.webp'
                            alt='piture'
                            className='w-11 h-11 object-cover'
                          />
                        </div>
                        <div className='flex-grow ml-2 overflow-hidden'>
                          <div className='truncate'>
                            Bàn phím cơ không dây Xinmeng M75 Pro - Led RGb - Gasket Mount - Có hot-swap - Mạch 5 pin -
                            Màn LED - App Marco
                          </div>
                        </div>
                        <div className='ml-2 flex-shrink-0'>
                          <span className='text-cyan-600'>736.735₫</span>
                        </div>
                      </div>
                      <div className='mt-4 flex'>
                        <div className='flex-shrink-0'>
                          <img
                            src='	https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m8pmvgchxl5075.webp'
                            alt='piture'
                            className='w-11 h-11 object-cover'
                          />
                        </div>
                        <div className='flex-grow ml-2 overflow-hidden'>
                          <div className='truncate'>
                            Bàn phím cơ không dây Xinmeng M75 Pro - Led RGb - Gasket Mount - Có hot-swap - Mạch 5 pin -
                            Màn LED - App Marco
                          </div>
                        </div>
                        <div className='ml-2 flex-shrink-0'>
                          <span className='text-cyan-600'>736.735₫</span>
                        </div>
                      </div>
                      <div className='mt-4 flex'>
                        <div className='flex-shrink-0'>
                          <img
                            src='	https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m8pmvgchxl5075.webp'
                            alt='piture'
                            className='w-11 h-11 object-cover'
                          />
                        </div>
                        <div className='flex-grow ml-2 overflow-hidden'>
                          <div className='truncate'>
                            Bàn phím cơ không dây Xinmeng M75 Pro - Led RGb - Gasket Mount - Có hot-swap - Mạch 5 pin -
                            Màn LED - App Marco
                          </div>
                        </div>
                        <div className='ml-2 flex-shrink-0'>
                          <span className='text-cyan-600'>736.735₫</span>
                        </div>
                      </div>
                      <div className='mt-4 flex'>
                        <div className='flex-shrink-0'>
                          <img
                            src='	https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m8pmvgchxl5075.webp'
                            alt='piture'
                            className='w-11 h-11 object-cover'
                          />
                        </div>
                        <div className='flex-grow ml-2 overflow-hidden'>
                          <div className='truncate'>
                            Bàn phím cơ không dây Xinmeng M75 Pro - Led RGb - Gasket Mount - Có hot-swap - Mạch 5 pin -
                            Màn LED - App Marco
                          </div>
                        </div>
                        <div className='ml-2 flex-shrink-0'>
                          <span className='text-cyan-600'>736.735₫</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex mt-6 items-center justify-between'>
                      <div className='capitalize text-xs text-gray-500'>Thêm vào giỏ hàng</div>
                      <button className='capitalize bg-cyan-500 hover:bg-opacity-90 px-4 py-2 rounded-sm text-white'>
                        Xem giỏ hàng
                      </button>
                    </div>
                  </div>
                </div>
              }
            >
              <Link to='/'>
                <FaCartPlus className='w-10 h-auto text-white' />
              </Link>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}
