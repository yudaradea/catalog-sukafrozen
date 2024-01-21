import { categoryProduct } from "../constants";
import { daftarProduct } from "../constants";
import ModalProduk from "./ModalProduk";

const ListProduct = () => {
  return (
    <>
      <section className="fp__menu mt_95 xs_mt_65 mb_95 xs_mb_65">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-duration="1s">
            <div className="col-md-8 col-lg-7 col-xl-6 m-auto text-center">
              <div className="fp__section_heading mb_45">
                <h4>List Product</h4>
                <h2>Our Delicious Product</h2>
                <span>
                  <img src="images/heading_shapes.png" alt="shapes" className="img-fluid w-100" />
                </span>
                <p>
                  Objectively pontificate quality models before intuitive information. Dramatically recaptiualize
                  multifunctional materials.
                </p>
              </div>
            </div>
          </div>

          <div className="row wow fadeInUp" data-wow-duration="1s">
            <div className="col-12">
              <div className="menu_filter d-flex flex-wrap justify-content-center">
                <button className=" active" data-filter="*">
                  all product
                </button>
                {categoryProduct.map((category) => (
                  <button key={category.id} data-filter={category.class}>
                    {category.nama}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="row grid">
            {daftarProduct.map((product) => (
              <div
                key={product.id}
                className={`col-xl-3 col-sm-6 col-lg-4 wow fadeInUp ${product.kategori}`}
                data-wow-duration="1s"
              >
                <div className="fp__menu_item">
                  <div className="fp__menu_item_img">
                    <img src={product.imgURL} alt="menu" className="img-fluid w-100" />
                    <a className="category" href="#">
                      {product.kategori}
                    </a>
                  </div>
                  <div className="fp__menu_item_text">
                    <a className="title" href="" data-bs-toggle="modal" data-bs-target={`#${product.key}`}>
                      {product.merk} <br />
                      {product.nama}
                    </a>
                    <h5 className="price">{product.harga}</h5>
                    <ul className="d-flex flex-wrap justify-content-center">
                      <li>
                        <a href="#" data-bs-toggle="modal" data-bs-target={`#${product.key}`}>
                          Detail <i className="far fa-eye ms-1"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ModalProduk />
    </>
  );
};

export default ListProduct;
