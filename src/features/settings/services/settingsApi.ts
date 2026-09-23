export async function saveUserSetting(provider: string | null, theme: string | null, think: boolean | null) {
    await fetch(`http://localhost:8192/api/settings/save`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ provider: provider, theme: theme, think: think }),
    }); 
}
