import Mirador from 'mirador/dist/es/src/index';
import MiradorDownload from 'mirador-dl-plugin';
import MiradorDownloadDialogPlugin from 'mirador-dl-plugin';
import miradorAnnotationPlugins from 'mirador-annotations/es/index';
import LocalStorageAdapter from 'mirador-annotations/es/LocalStorageAdapter';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import textOverlayPlugin from 'mirador-textoverlay/es';

window.Mirador = Mirador;

window.miradorPlugins = [
  ...miradorImageToolsPlugin,
  ...textOverlayPlugin,
  MiradorDownload.miradorDownloadPlugin,
  MiradorDownload.MiradorDownloadDialogPlugin,
  ...miradorAnnotationPlugins,
];

