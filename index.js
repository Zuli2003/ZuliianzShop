/**
 * Fungsi Navigasi Halaman
 * Menyembunyikan semua elemen .page-content dan menampilkan yang dipilih
 */
function showPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(p => p.classList.remove('active'));
    
    document.getElementById(pageId).classList.add('active');
    
    // Scroll ke atas setiap pindah halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Validasi Formulir Transaksi
 */
const form = document.getElementById('formTransaksi');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nama = document.getElementById('t_nama').value;
        const jumlah = document.getElementById('t_jumlah').value;
        const kategori = document.getElementById('t_kategori').value;
        const errorMsg = document.getElementById('error-msg');

        // Validasi: Pastikan semua input diisi
        if (!nama || !jumlah || !kategori) {
            errorMsg.style.display = 'block';
        } else {
            errorMsg.style.display = 'none';
            
            // Tambahkan data ke tabel secara dinamis
            const tableBody = document.getElementById('tabel-body');
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td><b>${nama}</b></td>
                <td>Rp ${parseInt(jumlah).toLocaleString('id-ID')}</td>
                <td>${kategori}</td>
            `;
            
            tableBody.prepend(row);
            
            // Reset Form & Notifikasi Berhasil
            form.reset();
            alert('Transaksi Berhasil Disimpan!');
        }
    });
}