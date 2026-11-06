# Taksi Durağı Web Sitesi 🚕

Modern siyah-sarı temalı, tek sayfalık, mobil uyumlu taksi iletişim sitesi.

## Başlatma

`index.html` dosyasına çift tıklayarak tarayıcıda açın. Ek program veya sunucu gerekmiyor.

## İsim, telefon ve adresi düzenleme

`script.js` dosyasının en üstündeki `SITE_INFO` alanlarını doldurun:

```js
const SITE_INFO = {
  businessName: "ÖRNEK TAKSİ DURAĞI",
  driverName: "Ahmet Yılmaz",
  phone: "+90 555 123 45 67",
  whatsapp: "", // Boşsa telefon numarası kullanılır
  address: "Örnek Mahallesi, Örnek Sokak No: 5, Kadıköy / İstanbul"
};
```

**Not:** Yukarıdaki isim, numara ve adres yalnızca örnektir. Gerçek bilgiler girilene kadar arama, WhatsApp ve yol tarifi butonları uyarı gösterir. Sahte telefon veya konuma yönlendirme yapmaz.

## Dosyalar

- `index.html`: Sayfanın içeriği
- `style.css`: Renkler, tasarım, mobil uyumluluk
- `script.js`: İşletme bilgileri ve butonların çalışması

## Yayınlama

Dosyaları birlikte Netlify, GitHub Pages veya herhangi bir statik hosting hizmetine yükleyebilirsiniz. Özel alan adı (domain) daha sonra bağlanabilir. Google Fonts kullanıldığından bağlantı yoksa yerel sistem yazı tipi gösterilir.
