// Volviendo a origenes

// Hola mundo VS Code

#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main()
{
    vector<string> msg {"HOLA", "C++", "MUNDO", "from", "VS Code", "and the C++ extension! NOSEQUE!"};

    for (const string& word : msg)
    {
        cout << word << " ";
    }
    cout << endl;
}
