import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';
import { sendEmailNotification } from './src/server/emailNotifier';

function emailNotificationPlugin(): Plugin {
  return {
    name: 'email-notification-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/notify-email') {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', async () => {
              try {
                const payload = JSON.parse(body || '{}');
                const result = await sendEmailNotification(payload);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                res.end(JSON.stringify(result));
              } catch (err: any) {
                console.error('[API /api/notify-email Error]', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                res.end(JSON.stringify({ error: err?.message || 'Server error processing notification' }));
              }
            });
            return;
          } else if (req.method === 'GET') {
            try {
              const logFile = path.resolve(process.cwd(), 'data/email_notifications.json');
              const logs = fs.existsSync(logFile) ? JSON.parse(fs.readFileSync(logFile, 'utf-8')) : [];
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ success: true, count: logs.length, logs }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ error: err?.message }));
            }
            return;
          }
        }
        next();
      });
    }
  };
}

function photoUploadPlugin(): Plugin {
  return {
    name: 'photo-upload-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.startsWith('/api/upload-facility-photo') && req.method === 'POST') {
          let chunks: Buffer[] = [];
          req.on('data', (chunk) => {
            chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
          });
          req.on('end', () => {
            try {
              const bodyStr = Buffer.concat(chunks).toString('utf-8');
              const { filename, base64Data } = JSON.parse(bodyStr || '{}');
              if (!filename || !base64Data) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                res.end(JSON.stringify({ error: 'Missing filename or base64Data' }));
                return;
              }
              const cleanName = path.basename(filename);
              const base64Clean = base64Data.replace(/^data:image\/\w+;base64,/, '');
              const buffer = Buffer.from(base64Clean, 'base64');
              
              const targetPublic = path.resolve(__dirname, 'public/images/facility', cleanName);
              fs.mkdirSync(path.dirname(targetPublic), { recursive: true });
              fs.writeFileSync(targetPublic, buffer);
              
              const targetDist = path.resolve(__dirname, 'dist/images/facility', cleanName);
              if (fs.existsSync(path.resolve(__dirname, 'dist'))) {
                fs.mkdirSync(path.dirname(targetDist), { recursive: true });
                fs.writeFileSync(targetDist, buffer);
              }

              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true, path: `/images/facility/${cleanName}` }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ error: err?.message || 'Server error' }));
            }
          });
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), photoUploadPlugin(), emailNotificationPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
