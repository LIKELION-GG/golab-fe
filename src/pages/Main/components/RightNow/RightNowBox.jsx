const RightNowBox = (data) => {
	return (
		<div className="border border-Blue-400 bg-Blue-100 bg-opacity-50 rounded-3xl flex-none w-[calc((100%-58px)/3)]">
			<div className="flex-col-template px-[18px]">
				<img src="/img/present.svg" />
				<p className="mt-[7px] text-Blue-500 text-center">{data.data.reward}</p>
				<p className="mt-[21px] text-[11px] text-center">{data.data.title}</p>
			</div>
		</div>
	);
};

export default RightNowBox;
