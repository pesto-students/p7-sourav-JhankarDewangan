// In a town, there are n people labeled from 1 to n. There is a rumor that one of thesepeople is secretly the town judge.If the town judge exists, then: 1. The town judge trusts nobody. 2. Everybody (except forthe town judge) trusts the town judge. 3. There is exactly one person that satisfiesproperties 1 and 2.You are given an array trust where trust[i] = [ai, bi] representing that the person labeledai trusts the person labeled bi. Return the label of the town judge if the town judge existsand can be identified, or return -1 otherwise.
// Example 1:Input: n = 2, trust = [[1,2]]
// Output: 2

var findJudge = function(n, trust) {
    const indegree = new Array(n+1).fill(0)
   const outdegree = new Array(n+1).fill(0)

   for(const [a,b] of trust){
       indegree[b]++
       outdegree[a]++
   }

   let ans = -1
   
   for(let i=1;i<=n; i++){
       if(indegree[i] === n-1 && outdegree[i] == 0){
           ans = i;
           break;
       }
   }

   return ans
}; 