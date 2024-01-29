export default function ProductCardPlaceholder() {
	return (
		<div className="grid grid-cols-5 sm:block sm:hover:shadow-md p-4 sm:rounded-lg delay-200 border-b border-slate-300 sm:border-0">
			<div className="col-span-1 aspect-square rounded-lg bg-slate-300 animate-pulse"></div>
			<div className="col-span-3 px-4 sm:px-0 sm:py-4 sm:space-y-0">
				<div className="grid grid-cols-4 gap-x-4 gap-y-1">
					<div className="col-span-3 h-6 bg-slate-300 animate-pulse"></div>
					<div className="col-span-1 h-6 bg-slate-300 animate-pulse"></div>
					<div className="col-span-1 h-6 bg-slate-300 animate-pulse"></div>
				</div>
			</div>
		</div>
	);
}
