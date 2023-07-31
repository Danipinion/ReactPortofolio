import React from "react";

function Resume() {
	return (
		<div className="h-96 sm:mb-0 mb-10 overflow-y-scroll cards">
			<div className=" ">
				<h1 className="text-white font-bold text-3xl mb-4 text-center">
					Resume
				</h1>
				<div className="river relative mt-1 sm:ml-10 ml-3">
					<hr className="border-2 h-56 border-cyan-500 absolute left-10" />
					<div className="school">
						<div>
							<div className="circle absolute left-6 text-2xl w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
								<ion-icon name="school-outline"></ion-icon>
							</div>
							<p className="ml-20">TK Thoriqul Huda</p>
							<p className="ml-20 text-sm">2015-2017</p>
						</div>
						<div className="mt-5">
							<div className="circle absolute left-6 text-2xl w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
								<ion-icon name="school-outline"></ion-icon>
							</div>
							<p className="ml-20">MI Thoriqul Huda</p>
							<p className="ml-20 text-sm">2017-2019</p>
						</div>
						<div className="mt-5">
							<div className="circle absolute left-6 text-2xl w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
								<ion-icon name="school-outline"></ion-icon>
							</div>
							<p className="ml-20">MTS Al-Istiqomah</p>
							<p className="ml-20 text-sm">2019-2021</p>
						</div>
						<div className="mt-5">
							<div className="circle absolute left-6 text-2xl w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
								<ion-icon name="school-outline"></ion-icon>
							</div>
							<p className="ml-20">SMK Negeri 1 Geger</p>
							<p className="ml-20 text-sm">2021-Sekarang</p>
						</div>
					</div>
				</div>

				<h1 className="text-white font-bold text-3xl mb-4 text-center">
					Cita-Cita
				</h1>
				<div className="mt-0.5 sm:ml-10 ml-3">
					<p className="text-center">
						Saya bercita-cita menjadi seorang programmer yang handal dan
						berpengaruh dalam industri teknologi. Saya ingin menciptakan
						perangkat lunak yang inovatif dan memberikan solusi bagi
						permasalahan dunia nyata. Impian saya adalah menjadi salah satu
						kontributor besar dalam mengembangkan teknologi yang dapat
						meningkatkan kehidupan banyak orang.
					</p>
				</div>

				<h1 className="text-white font-bold text-3xl mb-4 text-center">
					Harapan
				</h1>
				<div className="mt-0.5 sm:ml-10 ml-3">
					<p className="text-center">
						Harapan saya sebagai seorang programmer adalah dapat terus belajar
						dan mengembangkan keterampilan dalam berbagai bahasa pemrograman dan
						teknologi terkini. Saya ingin bekerja di lingkungan yang mendukung
						kolaborasi dan memberikan kesempatan untuk berkontribusi dalam
						proyek-proyek yang menantang dan bermakna. Saya berharap dapat
						bekerja dalam tim yang kreatif dan inovatif, sehingga saya bisa
						terus mengasah kemampuan saya dan menciptakan produk-produk yang
						luar biasa. Selain itu, saya juga berharap dapat berkontribusi dalam
						mengajarkan pemrograman kepada generasi muda, sehingga mereka juga
						dapat memahami dan memanfaatkan potensi teknologi untuk masa depan
						yang lebih baik.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Resume;
