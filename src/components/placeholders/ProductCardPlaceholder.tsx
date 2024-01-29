export default function RelatedProductCardPlaceholder() {
	return (
		<div className="p-4 space-y-2">
			<div className="col-span-1 aspect-square rounded-lg bg-slate-300 animate-pulse"></div>
			<div className="col-span-3 sm:px-0 sm:py-4 sm:space-y-0">
				<div className="grid grid-cols-4 gap-x-4 gap-y-1">
					<div className="col-span-3 h-6 bg-slate-300 animate-pulse"></div>
					<div className="col-span-1 h-6 bg-slate-300 animate-pulse"></div>
					<div className="col-span-1 h-6 bg-slate-300 animate-pulse"></div>
				</div>
			</div>
		</div>
	);
}
