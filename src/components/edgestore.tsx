'use client';

import * as React from 'react';
import { useEdgeStore } from '@/libs/edgestore';

export default function Edgestore() {
    const [file, setFile] = React.useState<File>();
    const [progress, setProgress] = React.useState(0);
    const { edgestore } = useEdgeStore();

    return (
        <div>
            <input
                type="file"
                onChange={(e) => {
                    setFile(e.target.files?.[0]);
                }}
            />
            <div className='h-[6px] w-44 border rounded overflow-hidden'>
                <div
                    className='h-full bg-white transition-all duration-150'
                    style={{
                        width: `${progress}%`
                    }}
                />
            </div>
            <button
                onClick={async () => {
                    if (file) {
                        const res = await edgestore.publicFiles.upload({
                            file,
                            options: {
                                temporary: true,
                            },
                            onProgressChange: (progress) => {
                                setProgress(progress);
                            },
                        });

                        console.log(res);
                    }
                }}
            >
                Upload
            </button>
        </div>
    );
}