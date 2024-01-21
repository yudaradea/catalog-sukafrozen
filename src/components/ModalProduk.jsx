import { daftarProduct } from "../constants";

const ModalProduk = () => {
  return (
    <>
      {daftarProduct.map((produk) => (
        <div key={produk.id} className="fp__cart_popup">
          <div className="modal fade" id={produk.key} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i className="fa fa-times"></i>
                  </button>
                  <div className="fp__cart_popup_img">
                    <img src={produk.imgURL} alt="menu" className="img-fluid w-100 rounded" />
                  </div>
                  <div className="fp__cart_popup_text">
                    <a href="#" className="title">
                      {produk.nama}
                    </a>
                    <h4 className="price">{produk.harga}</h4>

                    <div className="details_size">
                      <h5>Spesifikasi Produk</h5>
                      <p>Merk : {produk.merk}</p>
                      <p>Kondisi Penyimpanan : {produk.kondisi}</p>
                      <p>Jenis Makanan : {produk.jenis}</p>
                      <p>Masa Penyimpanan : {produk.masaPenyimpanan}</p>
                      <p>Stok : {produk.stok}</p>
                      <p>Berat Bersih : {produk.berat}</p>
                    </div>

                    <ul className="details_button_area d-flex flex-wrap justify-content-center">
                      <li>
                        <a className="common_btn" href={produk.link} target="_blank" rel="noreferrer">
                          beli produk
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ModalProduk;
