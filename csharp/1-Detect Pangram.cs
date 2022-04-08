using System;
using System.Collections.Generic;

public static class Kata
{
  public static bool IsPangram(string str)
  {
    char[] strArray = str.ToLower().ToCharArray();
    Array.Sort(strArray, StringComparer.InvariantCulture);
    
    HashSet<char> unDuplicatedStrArray = new HashSet<char>(strArray);
    
    List<char> lettersOnlyStrList = new List<char>();

    foreach(var item in unDuplicatedStrArray)
    {
      if ((int)item >= 97 && (int)item <= 122)
      {
        lettersOnlyStrList.Add(item);
      }
    }
    
    return lettersOnlyStrList.Count == 26;
  }
}
