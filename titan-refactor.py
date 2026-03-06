import os
import re
import json

target_dir = './basic-logic/algorithms'

# Pattern 1: Standard 'function name(params) {'
std_func_pattern = re.compile(r'(?<!export\s)function\s+(\w+)\s*\((.*?)\)\s*\{')

# Pattern 2: Arrow 'const name = (params) => {'
arrow_func_pattern = re.compile(r'(?<!export\s)const\s+(\w+)\s*=\s*\((.*?)\)\s*=>\s*\{')

def refactor_titan_logic():
    manifest = []
    for filename in os.listdir(target_dir):
        if filename.endswith('.js'):
            filepath = os.path.join(target_dir, filename)
            
            # Add to manifest
            manifest.append(filename)

            with open(filepath, 'r') as f:
                content = f.read()

            # Skip if file already exports anything
            if 'export ' in content:
                print(f"[-] Skipping {filename}: Export detected.")
                continue

            # Check for Standard Functions -> convert to Export Const Arrow
            new_content = std_func_pattern.sub(r'export const \1 = (\2) => {', content)
            
            # Check for existing Arrow Functions -> add Export prefix
            new_content = arrow_func_pattern.sub(r'export const \1 = (\2) => {', new_content)

            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)
                print(f"[+] Refactored {filename}")
            else:
                print(f"[!] No changes needed for {filename}")

    # Write manifest
    manifest_path = os.path.join(target_dir, 'algorithms-manifest.json')
    with open(manifest_path, 'w') as f:
        json.dump(manifest, f, indent=4)
    print("[+] Algorithm Manifest deployed successfully.")

if __name__ == "__main__":
    print("Scanning Neural Link for legacy and modern logic...")
    refactor_titan_logic()
    print("All algorithms are now ready for tactical deployment.")