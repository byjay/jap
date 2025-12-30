/**
 * AIClient.js
 * Frontend wrapper for accessing JapBong AI Services (Gemini).
 */

const AIClient = {
    baseUrl: '/api/ai',

    /**
     * Get dictionary info for a word.
     * @param {string} word - The Japanese word to look up.
     * @returns {Promise<Object>} Word data (reading, meaning, examples)
     */
    async getWordInfo(word) {
        try {
            const response = await fetch(`${this.baseUrl}/word`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ word })
            });
            if (!response.ok) throw new Error('AI Word API Failed');
            return await response.json();
        } catch (error) {
            console.error('AI Word Error:', error);
            return null;
        }
    },

    /**
     * Generate a conversation about a topic.
     * @param {string} topic - Topic (e.g., "Ordering Sushi", "Lost in Tokyo")
     * @param {string} level - "N5", "N4", "N3"
     * @returns {Promise<Object>} Conversation script
     */
    async generateConversation(topic, level = "N5") {
        try {
            const response = await fetch(`${this.baseUrl}/conversation`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ topic, level })
            });
            if (!response.ok) throw new Error('AI Chat API Failed');
            return await response.json();
        } catch (error) {
            console.error('AI Chat Error:', error);
            return null;
        }
    },

    /**
     * Analyze text sentiment to trigger an avatar action.
     * @param {string} text - User input or sentence
     * @returns {Promise<Object>} { sentiment: "happy", action_id: "happy_jump" }
     */
    async analyzeAction(text) {
        try {
            const response = await fetch(`${this.baseUrl}/analyze-action`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text })
            });
            if (!response.ok) throw new Error('AI Action API Failed');
            return await response.json();
        } catch (error) {
            console.error('AI Action Error:', error);
            return { action_id: 'idle_wait_tap' }; // Fallback
        }
    }
};

window.AIClient = AIClient;
