// Roblox Script Generator – client side logic
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('generator-form');
    const apiKeyInput = document.getElementById('api-key');
    const promptInput = document.getElementById('prompt');
    const outputSection = document.getElementById('output-section');
    const scriptOutput = document.getElementById('script-output');
    const copyBtn = document.getElementById('copy-btn');
    const statusSection = document.getElementById('status-section');
    const statusMessage = document.getElementById('status-message');

    // Helper to show status messages
    const showStatus = (msg, hideAfter = 3000) => {
        statusMessage.textContent = msg;
        statusSection.classList.remove('hidden');
        if (hideAfter) {
            setTimeout(() => statusSection.classList.add('hidden'), hideAfter);
        }
    };

    // Copy to clipboard
    copyBtn.addEventListener('click', () => {
        const text = scriptOutput.textContent;
        navigator.clipboard.writeText(text).then(() => {
            showStatus('Copied to clipboard!');
        }).catch(() => {
            showStatus('Failed to copy.', 2000);
        });
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const apiKey = apiKeyInput.value.trim();
        const userPrompt = promptInput.value.trim();

        if (!apiKey || !userPrompt) {
            showStatus('Please fill in both fields.', 2000);
            return;
        }

        // UI feedback
        form.querySelector('button').disabled = true;
        showStatus('Generating script…', 0);
        outputSection.classList.add('hidden');

        try {
            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'openai/gpt-oss-120b',
                    messages: [
                        {
                            role: 'system',
                            content: `You are an expert Roblox Lua developer. Generate a concise, well‑commented LocalPlayer script based on the user's request. Do NOT include any explanations, only return the Lua code block.`
                        },
                        {
                            role: 'user',
                            content: userPrompt
                        }
                    ],
                    temperature: 0.6,
                    max_tokens: 500
                })
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.error?.message || 'API request failed');
            }

            const data = await response.json();
            const assistantMessage = data.choices?.[0]?.message?.content?.trim();

            if (!assistantMessage) {
                throw new Error('Empty response from model');
            }

            // Display result
            scriptOutput.textContent = assistantMessage;
            outputSection.classList.remove('hidden');
            showStatus('Script generated successfully!', 2000);
        } catch (error) {
            console.error(error);
            showStatus(`Error: ${error.message}`, 5000);
        } finally {
            form.querySelector('button').disabled = false;
        }
    });
});