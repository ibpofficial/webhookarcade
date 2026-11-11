import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

export const CliDocsPage: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyCommand = (cmd: string, index: number) => {
    navigator.clipboard.writeText(cmd);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const cliCommands = [
    {
      title: '1. Install Arcade Developer CLI',
      desc: 'Install the global CLI to manage endpoints and forward webhooks locally.',
      cmd: 'npm install -g @webhook-arcade/cli',
    },
    {
      title: '2. Authenticate CLI Session',
      desc: 'Link your CLI to your Webhook Arcade instance.',
      cmd: 'arcade login',
    },
    {
      title: '3. Create a New Webhook Receiver',
      desc: 'Generate a dedicated endpoint directly from your terminal.',
      cmd: 'arcade endpoint create --name "Local Development"',
    },
    {
      title: '4. Forward Webhooks to Localhost (Local Tunneling)',
      desc: 'Stream captured webhooks directly to your local development server.',
      cmd: 'arcade listen --to http://localhost:3000/api/webhooks',
    },
    {
      title: '5. Inspect Recent Events',
      desc: 'List captured deliveries and status codes in your terminal.',
      cmd: 'arcade events --limit 10',
    },
    {
      title: '6. Replay a Specific Event',
      desc: 'Trigger an immediate redelivery of a historical event ID.',
      cmd: 'arcade replay evt_3MtwEN2eZvKYlo2C',
    },
  ];

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto p-6 space-y-6 bg-white text-neutral-900">
      <div>
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-neutral-900" />
          <h2 className="text-lg font-bold text-neutral-900">Arcade CLI & Local Forwarding</h2>
        </div>
        <p className="text-xs text-neutral-500">
          Stream incoming cloud webhooks directly into your local machine using the Arcade CLI.
        </p>
      </div>

      <div className="space-y-4">
        {cliCommands.map((item, idx) => (
          <div key={idx} className="rounded-lg border border-neutral-200 bg-white p-4 space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-neutral-900">{item.title}</h3>
              <button
                onClick={() => copyCommand(item.cmd, idx)}
                className="flex items-center gap-1 text-[11px] font-semibold text-neutral-900 hover:text-neutral-600"
              >
                {copiedIndex === idx ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                <span>{copiedIndex === idx ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="text-xs text-neutral-600">{item.desc}</p>
            <div className="rounded-md border border-neutral-200 bg-neutral-50 p-3 font-mono text-xs text-neutral-900 overflow-x-auto">
              $ {item.cmd}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
