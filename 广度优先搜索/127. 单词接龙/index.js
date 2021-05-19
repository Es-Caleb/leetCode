/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    let queue = [];
    queue.push([beginWord, 1]);
    while(queue.length) {
        let [word, level] = queue.shift();
        if (word === endWord) {
            return level;
        }
        for(let i = 0; i < word.length; i++) {
            for (let x = 97; x <= 122; x++) {
                let newWord = word.slice(0, i) + String.fromCharCode(x) + word.slice(i+1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, level + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }
    return 0;
};
// 题目地址 https://leetcode-cn.com/problems/word-ladder/
// 提交记录 https://leetcode-cn.com/submissions/detail/178888738/