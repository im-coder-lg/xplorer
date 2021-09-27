import { open } from '../Files/File Operation/open';
import storage from 'electron-json-storage-sync';
import { BrowserWindow } from '@electron/remote';
import createSidebar from './sidebar';
import { closePreviewFile } from '../Files/File Preview/preview';
import windowGUID from '../Constants/windowGUID';

/**
 * Reload the page
 * @returns {void}
 */
const reload = async (): Promise<void> => {
	const tabs = storage.get(`tabs-${windowGUID}`)?.data;
	await createSidebar();
	open(tabs.tabs[tabs.focus].position);
	closePreviewFile();
	document.querySelector<HTMLElement>('.properties').style.animation =
		'close-properties 1s forwards';
};

/**
 * Minimize Xplorer window
 * @returns {void}
 */
const minimize = (): void => {
	const electronWindow = BrowserWindow.getFocusedWindow();
	electronWindow.minimize();
};

/**
 * Maximize Xplorer window
 * @returns {void}
 */
const maximize = (): void => {
	const electronWindow = BrowserWindow.getFocusedWindow();
	!electronWindow.isMaximized()
		? electronWindow.maximize()
		: electronWindow.unmaximize();
};

/**
 * Window manager initializer function
 * @returns {void}
 */
const windowManager = (): void => {
	// Minimize the screen
	document.querySelector('#minimize').addEventListener('click', minimize);
	// Maximize the screen
	document.querySelector('#maximize').addEventListener('click', maximize);
	// Exit window
	document.querySelector('#exit').addEventListener('click', () => {
		const electronWindow = BrowserWindow.getFocusedWindow();
		electronWindow.close();
	});

	// Refresh the page
	document.querySelector('#refresh').addEventListener('click', reload);

	document
		.querySelector('.path-navigator')
		.addEventListener(
			'change',
			(event: Event & { target: HTMLInputElement }) => {
				open(event.target.value);
			}
		);
};

export { windowManager, reload, minimize, maximize };
