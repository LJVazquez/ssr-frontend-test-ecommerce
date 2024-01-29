import { EmailIcon, GithubIcon } from './ui/icons';

export default function Footer() {
	return (
		<footer className="py-6 bg-black text-white text-center space-y-2">
			<h3 className="text-lg font-semibold">¡Contactame!</h3>
			<div className="flex space-x-4 items-center justify-center">
				<a href="mailto:ljvazquez00@gmail.com">
					<EmailIcon />
				</a>
				<a href="https://github.com/LJVazquez" target="_blank">
					<GithubIcon />
				</a>
			</div>
		</footer>
	);
}
