export default function Gallery() {
  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-wide">
          OUR GALLERY
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400">
          Discover the transformative power of our designs. Each project is a testament to our commitment to creating spaces that are not only beautiful but also deeply personal.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <img
            alt="Large hero image of a modern interior"
            className="w-full h-auto object-cover rounded-3xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrIoJvSpW_u1gQ92B9w5zJrfJANye_sfb7Uc-xHDHTDLbT28J7zNJTb0AQA-9ksxhLBuOrgVv-rYtfSqZlM2Jayhcek8UKlkmZXjFbKi0ZkqgmfUtu34v6ml697fXALipkWyfmWTC0JB-3Jml-pua4NrIppHT_IMLgRGY8RDziY8pSjFhNYe_qIP_4x7oS8v_lwqQiA3gQkscOYRkTM7ow4Ziw8i4j73epZwRpvaifYFqYmqcYTKpMxyqKXsja0gkDac-ToOoQBmo"
          />
        </div>
        <div className="grid grid-rows-2 gap-8">
          <div>
            <img
              alt="Smaller complementary image of an interior detail"
              className="w-full h-auto object-cover rounded-3xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeKpQBwJNDH1ULCDvhwdcIByeKNN7vClN3NurNvIvcnqTd4eKRrC7gTECYU7lONL-8vuYV4ttu_3ALqgt31CTCdByB2atKH6wCmkM-FcuUNKBx_Bjg3c2z4hkRTl-TSNzk2SzRs3vyM7ZD5zupOskI6QjviPqOEPxm2aiSo5DcwjYOIEzDK-F5qCqjpRHEWYcvWGT__ZHLcfHZcLUuAtnUvDqwbLeqNa21GuBLrtnYYMODWNXaAOE4xuMmM3guJM1O5oT193x2AVI"
            />
          </div>
          <div>
            <img
              alt="Another smaller complementary image of an interior space"
              className="w-full h-auto object-cover rounded-3xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt6Nn7mkmlav-n8QDMCiMVl-BJ-idpxMIgWhc-CvqUONdLCN0Xw2MXa6noiieMvbrtW3hl8Csy0PHnqpV9ONQ7LTgoQH4Oe1d3c9CMbmTbZgj48Y1gwJdrbCeGaX6MASNeXi4zq__2BGrNBYjguE_DEOD8Qn7NA31bnjkfVG-Qom74BEG6fPOsicf36-cUaToBXEu_UEz7O6UPV4ORQTU1qjh4xHgy7OWV03rgZOkVsOCcCLR_Lj9lfpzeXDN2GrhOS98HKGyaH6o"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
