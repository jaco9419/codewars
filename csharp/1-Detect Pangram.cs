using System;
using System.Collections.Generic;

public static class Kata
{
  public static bool IsPangram(string str)
  {
    char[] charArray = str.ToLower().ToCharArray();
    Array.Sort(charArray, StringComparer.InvariantCulture);
    
    HashSet<char> unDuplicatedStrArray = new HashSet<char>(charArray);
    
    List<char> lettersOnlyStrList = new List<char>();

    foreach(char item in unDuplicatedStrArray)
    {
      if ((int)item >= 97 && (int)item <= 122)
      {
        lettersOnlyStrList.Add(item);
      }
    }
    
    return lettersOnlyStrList.Count == 26;
  }
}
