/*
  SİTE BİLGİLERİ
  Yalnızca aşağıdaki alanları değiştirmeniz yeterli.
  phone örneği: "+90 555 123 45 67"
  whatsapp boş bırakılırsa phone kullanılır.
  address örneği: "Örnek Mahallesi, Örnek Sokak No: 5, Kadıköy / İstanbul"
*/
const SITE_INFO = {
  businessName: "Esen Taksi Durağı",
  driverName: "İbrahim Karaman",
  phone: "05388988607",
  whatsapp: "05388988607",
  address: "Güngör mahallesi, Cengi topel caddesi Yüksekova / Hakkari"
};

// Sayfadaki bilgileri SITE_INFO içeriğiyle doldurur.
function setText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
}

setText('[data-business-name]', SITE_INFO.businessName || 'TAKSİ DURAĞI');
setText('[data-driver-name]', SITE_INFO.driverName || 'Ad Soyad');
setText('[data-phone-display]', SITE_INFO.phone || 'Numara eklenecek');
setText('[data-address-display]', SITE_INFO.address || 'Adres eklenecek');
document.getElementById('year').textContent = String(new Date().getFullYear());
document.title = `${SITE_INFO.businessName || 'Taksi Durağı'} | İletişim ve Konum`;

// Türkiye'deki 05xx ve 5xx formatlarını +90 formatına çevirir.
function phoneDigits(value) {
  let digits = String(value || '').replace(/\D/g, '');
  if (/^05\d{9}$/.test(digits)) digits = `9${digits}`;
  else if (/^5\d{9}$/.test(digits)) digits = `90${digits}`;
  return /^\d{10,15}$/.test(digits) ? digits : '';
}

const callNumber = phoneDigits(SITE_INFO.phone);
const whatsappNumber = phoneDigits(SITE_INFO.whatsapp || SITE_INFO.phone);
const mapsAddress = SITE_INFO.address.trim();

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('is-visible'), 3500);
}

// Gerçek bilgiler girilene kadar yanlış numarayı aramaz / sahte konum açmaz.
document.querySelectorAll('[data-action]').forEach((link) => {
  const type = link.dataset.action;
  let href = '';
  let message = '';

  if (type === 'call') {
    href = callNumber ? `tel:+${callNumber}` : '';
    message = 'Telefon numarası henüz eklenmedi.';
  } else if (type === 'whatsapp') {
    href = whatsappNumber ? `https://wa.me/${whatsappNumber}` : '';
    message = 'WhatsApp numarası henüz eklenmedi.';
    if (!href) link.removeAttribute('target');
  } else if (type === 'maps') {
    href = mapsAddress ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsAddress)}` : '';
    message = 'Durak adresi henüz eklenmedi.';
    if (!href) link.removeAttribute('target');
  }

  if (href) {
    link.href = href;
  } else {
    link.href = '#iletisim';
    link.addEventListener('click', (event) => {
      event.preventDefault();
      showToast(message);
    });
  }
});
