# Experiment  1
## Name of the experiment: Basic markdown instruction
### Heading 3


*Italic using single asterisk*

_Italic using single underscore_

**Bold using double asterisk**

__Bold using double underscore__

***Triple asterisk to make bold and italic***

___Triple underscore to make bold and italic___

~~StrikeThrough~~

# Blockquotes

> Hello world
>> Good morning

# Paragraph

My name is Maksudur Rahman Maksud. I am a student.

# List


1. Number1.
2. Number2.
    * Bullet 1
    + Bullet 2
    - Bullet 3
3. Number 3.

   

---
___

*** 

# Links

[Wikipedia](www.wikipedia.com)

![Nico](www.markdownguide.org/assets/images/tux.png)

## Table

| Syntax  | Description |
|:------: |:-----------:|
|-------- |-------------|
| Header  | Title       |
|Paragraph| Text        |

# Code


```cpp
#include<stdio.h>
int main(){
    int max_char = 100, offset = 1;
    char fname[] = "encrypt.txt", input[max_char], output[max_char], c;
    printf("Enter a string to encrypt : ");
    int len = 0;
    while(scanf("%c",&c) && c != '\n')
        input[len++] = c;

    // Encrypt
    for(int i = 0; i < len; i++)
        input[i] += offset;



}

```