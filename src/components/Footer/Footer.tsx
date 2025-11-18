export default function Footer() {
  return (
    <footer className='py-16 bg-neutral-100'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div className='lg:col-span-1'>
            <div>© 2025 Kommo. Tất cả các quyền được bảo lưu.</div>
          </div>
          <div className='lg:col-span-2'>
            <div>
              Quốc gia & Khu vực: Argentina Singapore Indonesia Thái Lan Malaysia Việt Nam Philippines Brazil México
              Colombia Chile Đài Loan
            </div>
          </div>
        </div>
        <div className='text-center text-sm mt-10'>
          <div>Công ty TNHH Kommo</div>
          <div className='mt-2'>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 30 đường 3 Tháng 2, Phường Ngọc Hà, Thành phố Hồ Chí Minh,
            Việt Nam
          </div>
          <div className='mt-2'>
            Chăm sóc khách hàng: Gọi tổng đài Kommo (miễn phí) hoặc Trò chuyện với Kommo ngay trên Trung tâm trợ giúp
          </div>
          <div className='mt-2'>Chịu Trách Nhiệm Quản Lý Nội Dung: ...</div>
          <div className='mt-2'>
            Mã số doanh nghiệp: 012345678 do Sở Kế hoạch và Đầu tư TP Hồ Chí Minh cấp lần đầu ngày 30/02/2015
          </div>
          <div className='mt-2'>© 2015 - Bản quyền thuộc về Công ty TNHH Kommo</div>
        </div>
      </div>
    </footer>
  )
}
