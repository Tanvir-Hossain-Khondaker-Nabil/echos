import Image from "next/image";
import Shape3Img from "../../public/images/v5/shape3.png";
function WaveShape() {
	return (
		<div className="aximo-wave-shape extra-side-margin">
			<Image src={Shape3Img} alt="wave" />
		</div>
	);
}

export default WaveShape;